<template>
    <div
        id="pagination"
        :current-page="currentPage"
        :movies-per-page="moviesPerPage"
        :total="moviesLength"
        @click="clickHandler"
    ></div>
</template>

<script>
export default {
    name: "MoviesPagination",
    data: () => ({
        code: "",
        size: 30, // pages size
        page: 1, // selected page
        step: window.innerWidth > 767 ? 3 : 1, // pages before and after current
    }),
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        moviesLength: {
            type: Number,
            default: 250,
        },
        moviesPerPage: {
            type: Number,
            default: 12,
        },
    },
    computed: {
        currentPageModal: {
            get() {
                return this.currentPage;
            },
            set() {},
        },
    },
    methods: {
        clickHandler(event) {
            if (event.target.closest(".pagination__pageNum")) {
                this.$emit.currentPage = parseInt(event.target.innerHTML);
                this.Start();
            }
            if (event.target.closest(".pagination__prevPage")) {
				if (this.$emit.currentPage === 1) {
                    return
                }
                this.$emit.currentPage--;
                this.Start();
            }
            if (event.target.closest(".pagination__nextPage")) {
				if (this.$emit.currentPage === this.size) {
                    return
                }
                this.$emit.currentPage++;
                this.Start();
            }
            if (event.target.closest(".pagination__lastPage")) {
                this.$emit.currentPage = this.size;
                this.Start();
            }

            if (event.target.closest(".pagination__firstPage")) {
                this.$emit.currentPage = 1;
                this.Start();
            }
        },
        Extend(data) {
            data = data || {};
            this.size = data.size || 300;
            this.$emit.currentPage = data.page || 1;
            this.step = data.step || 3;
        },

        Add(s, f) {
            for (let i = s; i < f; i++) {
                this.code += `<a data-page-num="${i}" class="pagination__pageNum">` + i + "</a>";
            }
        },
        Last() {
            this.code += `<i>...</i><a data-page-num="${this.size}" class="pagination__lastPage">` + this.size + "</a>"
        },
        First() {
            this.code += `<a data-page-num="1" class="pagination__firstPage">1</a><i>...</i>`;
        },

        Bind() {
            var a = this.e.getElementsByTagName("a");
            for (let i = 0; i < a.length; i++) {
                if (+a[i].innerHTML === this.$emit.currentPage)
                    a[i].className = "current";
            }
        },

        // write pagination
        Finish() {
            this.e.innerHTML = this.code;
            this.code = "";
            this.Bind();
            this.$emit("pageChanged", this.$emit.currentPage);
        },

        // find pagination type
        Start() {
            if (this.size < this.step * 2 + 6) {
                this.Add(1, this.size + 1);
            } else if (this.$emit.currentPage < this.step * 2 + 1) {
                this.Add(1, this.step * 2 + 4);
                this.Last();
            } else if (this.$emit.currentPage > this.size - this.step * 2) {
                this.First();
                this.Add(this.size - this.step * 2 - 2, this.size + 1);
            } else {
                this.First();
                this.Add(
                    this.$emit.currentPage - this.step,
                    this.$emit.currentPage + this.step + 1
                );
                this.Last();
            }
            this.Finish();
        },

        // create skeleton
        Create(e) {
            const html = [
                '<a class="pagination__prevPage">&#9668;</a>', // previous button
                "<span></span>", // pagination container
                '<a class="pagination__nextPage">&#9658;</a>', // next button
            ];

            e.innerHTML = html.join("");
            this.e = e.getElementsByTagName("span")[0];
        },

        // init
        Init(e, data) {
            this.Extend(data);
            this.Create(e);
            this.Start();
        },
    },
    mounted() {
        this.Init(document.getElementById("pagination"), {
            size: Math.ceil(this.moviesLength / this.moviesPerPage),
            page: this.$emit.currentPage,
            step: this.step,
        });
    },
};
</script>

<style scoped>
#pagination {
    display: flex;
    justify-content: center;
    align-items: center;
}

#pagination >>> span {
    display: flex;
}

#pagination >>> a,
#pagination >>> i {
    display: grid;
    place-content: center;
    width: 50px;
    height: 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #FFFFFF;
    user-select: none;
}
#pagination >>> a {
    margin: 0 2px 0 2px;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
}
#pagination >>> a.current {
	color: #181818;
    background-color: #f1f1f1;
}
#pagination >>> i {
    margin: 0 3px 0 3px;
}

@media screen and (max-width: 767px) {
    #pagination >>> a,
    #pagination >>> i {
        width: 8.5vw;
    	height: 8.5vw;

		font-size: 4.4vw;
    }
}
</style>
