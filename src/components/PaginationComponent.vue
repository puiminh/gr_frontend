<template>
  <div class="bg-white p-4 flex items-center flex-wrap mx-auto">
    <div class="bg-white p-4 flex items-center flex-wrap">
        <nav aria-label="Page navigation">
          <ul class="inline-flex space-x-2">
            <li>
                <button   @click="onClickFirstPage" :disabled="isInFirstPage" class="flex items-center justify-center w-10 h-10 text-amber-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-amber-100">
                    <svg class="w-6 h-6 text-amber-600"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="currentColor" fill-rule="nonzero"> <path d="M358.989 657.36h51.154V366.64H358.99zM631.348 656.96l36.118-36.29L559.112 511.8l108.354-108.87-36.118-36.29L486.875 511.8z"></path> </g> </g></svg>
                </button>
            </li>
            <li>
                <button  @click="onClickPreviousPage" :disabled="isInFirstPage" class="flex items-center justify-center w-10 h-10 text-amber-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-amber-100">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
            </li>

            <li :key="page" v-for="page in pages" class="pagination-item">
                <button  @click="onClickPage(page.name)" :disabled="page.isDisabled" :class="['w-10 h-10', isPageActive(page.name) ? activeButton : nonactiveButton ]">{{ page.name }}</button>
            </li>

            <li>
                <button @click="onClickNextPage" :disabled="isInLastPage" class="flex items-center justify-center w-10 h-10 text-amber-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-amber-100">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
            </li>
            <li>
                <button   @click="onClickLastPage" :disabled="isInLastPage" class="flex items-center justify-center w-10 h-10 text-amber-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-amber-100">
                    <svg class="w-6 h-6 fill-current" fill="#000000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M562.19 511.799l-144.6 145.718-36.15-36.43L489.89 511.8l-108.45-109.29 36.15-36.429zM691.2 657.92H640V366.08h51.2z"></path></g></svg>
                </button>
            </li>
          </ul>
        </nav>
      </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            activeButton: 'text-white transition-colors duration-150 bg-amber-600 border border-r-0 border-amber-600 rounded-full focus:shadow-outline',
            nonactiveButton: 'text-amber-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-amber-100',
        }
    },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() { 
        // When on the first page 
        if (this.currentPage === 1) 
        { return 1; } 
        // When on the last page 
        if (this.currentPage === this.totalPages) 
        { return this.totalPages - Math.min(this.maxVisibleButtons, this.totalPages) + 1; } 
        // When in between 
        return this.currentPage - 1; 
    },
    pages() {
      const range = [];

      for (let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i+= 1 ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },

  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  },

};
</script>


<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>
