<template>
  <section id="landing">
    <div class="container-fluid py-3">
      <h2>Sharenet Technical Assessment</h2>
      <div class="d-flex align-items-center gap-1">
        <label
          for="categoryFilter"
          class="form-label pt-4"
        >Category:</label>
        <select
          id="categoryFilter"
          v-model="selectedCategory"
          class="form-select w-25 mt-3"
        >
          <option value="all">All</option>
          <option
            v-for="category in uniqueCategories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <label
          for="showOption"
          class="form-label pt-4"
        >Show:</label>
        <select
          id="showOption"
          v-model="showOption"
          class="form-select w-25 mt-3"
        >
          <option value="all">All</option>
          <option value="latest5">Latest 5</option>
        </select>
        <div
          v-show="showSearch"
          class="mt-3 w-100"
        >
          <input
            v-model="searchTerm"
            type="text"
            class="form-control search w-100"
            placeholder="Search by Full Name"
          />
        </div>
        <button
          class="btn btn-primary mt-3"
          @click="toggleSearch"
        >
          {{ showSearch ? "Cancel" : "Search" }}
        </button>
      </div>
      <div class="table-responsive bg-transparent table-wrapper pt-3">
        <table class="table table-hover bg-transparent table-bordered caption-top text-light">
          <caption class="text-dark">
            List of Stocks
          </caption>
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">
                <button
                  class="btn btn-outline-dark"
                  @click="sortByPrice"
                >
                  Price <i class="bi bi-arrow-down-up"></i>
                </button>
              </th>
              <th scope="col">
                <button
                  class="btn btn-outline-dark"
                  @click="sortByMove"
                >
                  Move <i class="bi bi-arrow-down-up"></i>
                </button>
              </th>
              <th scope="col">
                <button
                  class="btn btn-outline-dark"
                  @click="sortByPmove"
                >
                  Percentage Move <i class="bi bi-arrow-down-up"></i>
                </button>
              </th>
              <th scope="col">
                <button
                  class="btn btn-outline-dark"
                  @click="sortByDatetime"
                >
                  Time <i class="bi bi-arrow-down-up"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody class="text-dark">
            <tr
              v-for="(spot, index) in filteredSpotPrices"
              :key="index"
            >
              <td>{{ spot.fullName }}</td>
              <td>{{ spot.price.toFixed(2) }}</td>
              <td>{{ spot.move }}</td>
              <td>{{ spot.pmove.toFixed(2) }}%</td>
              <td>{{ spot.datetime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface Spot {
  code: string;
  fullName: string;
  price: number;
  move: number;
  pmove: number;
  tickerId: number;
  datetime: string;
  categoryName: string;
}

export default defineComponent({
  name: "landing",
  data() {
    return {
      spotPrices: [] as Spot[],
      showSearch: false,
      searchTerm: "",
      sortPriceAscending: true,
      sortPmoveAscending: true,
      sortMoveAscending: true,
      sortDatetimeAscending: true,
      selectedCategory: "all",
      showOption: "latest5",
    };
  },
  mounted() {
    this.fetchSpotPrices();
  },
  computed: {
    filteredSpotPrices(): Spot[] {
      let filteredSpotPrices = this.spotPrices;

      if (this.selectedCategory !== "all") {
        filteredSpotPrices = filteredSpotPrices.filter(
          (spot) => spot.categoryName === this.selectedCategory
        );
      }

      if (this.showOption === "latest5") {
        filteredSpotPrices = filteredSpotPrices
          .sort(
            (a, b) =>
              new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
          )
          .slice(0, 5);
      }

      if (this.searchTerm.trim() !== "") {
        const term = this.searchTerm.toLowerCase().trim();
        filteredSpotPrices = filteredSpotPrices.filter(
          (spot) => spot.fullName.toLowerCase().includes(term)
        );
      }

      return filteredSpotPrices;
    },
    uniqueCategories(): string[] {
      const uniqueCategoriesSet = new Set<string>();
      this.spotPrices.forEach((spot) =>
        uniqueCategoriesSet.add(spot.categoryName)
      );
      return Array.from(uniqueCategoriesSet);
    },
  },
  methods: {
    async fetchSpotPrices() {
      try {
        const response = await axios.get(
          "https://api.sharenet.co.za/api/v1/px2/spots"
        );
        this.spotPrices = response.data.spots;
        console.log(response);
      } catch (error) {
        console.error("Error fetching spot prices:", error);
      }
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
      this.searchTerm = "";
    },
    sortByPrice() {
      this.sortPriceAscending = !this.sortPriceAscending;
      const direction = this.sortPriceAscending ? 1 : -1;
      this.spotPrices.sort((a, b) => direction * (a.price - b.price));
    },
    sortByPmove() {
      this.sortPmoveAscending = !this.sortPmoveAscending;
      const direction = this.sortPmoveAscending ? 1 : -1;
      this.spotPrices.sort((a, b) => direction * (a.pmove - b.pmove));
    },
    sortByMove() {
      this.sortMoveAscending = !this.sortMoveAscending;
      const direction = this.sortMoveAscending ? 1 : -1;
      this.spotPrices.sort((a, b) => direction * (a.move - b.move));
    },
    sortByDatetime() {
      this.sortDatetimeAscending = !this.sortDatetimeAscending;
      const direction = this.sortDatetimeAscending ? 1 : -1;
      this.spotPrices.sort(
        (a, b) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
      );
    },
  },
});
</script>

<style>
@import "../assets/css/style.css";
</style>
