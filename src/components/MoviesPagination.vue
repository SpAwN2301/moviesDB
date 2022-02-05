<template>
    <div id="pagination" 
        :current-page="currentPage" 
        :per-page="moviesPerPage" 
        :total="moviesLength" 
        
        @click="clickHandler"
    >
    </div>
</template>

<script>
export default {
    name: "MoviesPagination",
    data: () => ({
        code: '',
        size: 30,// pages size
        page: 1, // selected page
        step: window.innerWidth > 767 ? 3 : 1  // pages before and after current
    }),
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 250,
        },
        perPage: {
            type: Number,
            default: 12,
        }
    },
    computed: {
        currentPageModal: {
            get() { return this.currentPage },
            set() {}
        }
    },
    methods: {
        clickHandler(event) {
            if (event.target.closest('.pagination__pageNum')) {
                this.$emit.currentPage = parseInt(event.target.innerHTML);
                this.Start();
            }
            if (event.target.closest('.pagination__prevPage')) {
                this.$emit.currentPage--;
                if (this.$emit.currentPage < 1) {
                    this.$emit.currentPage = 1;
                }
                this.Start();
            }
            if (event.target.closest('.pagination__nextPage')) {
                this.$emit.currentPage++;
                if (this.$emit.currentPage > this.size) {
                    this.$emit.currentPage = this.size;
                }
                this.Start();
            }
            if (event.target.closest('.pagination__lastPage')) {
                this.$emit.currentPage = this.size;
                this.Start();
            }
            
            if (event.target.closest('.pagination__firstPage')) {
                this.$emit.currentPage = 1;
                this.Start();
            }
        },
        Extend: function(data) {
            data = data || {};
            this.size = data.size || 300;
            this.$emit.currentPage = data.page || 1;
            this.step = data.step || 3;
        },

        Add: function(s, f) {
            for (let i = s; i < f; i++) {
                this.code += '<a class="pagination__pageNum">' + i + '</a>';
            }
        },
        Last: function() {
            this.code += '<i>...</i><a class="pagination__lastPage">' + this.size + '</a>';
        },
        First: function() {
            this.code += '<a class="pagination__firstPage">1</a><i>...</i>';
        },
        
        Bind: function() {
            var a = this.e.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                if (+a[i].innerHTML === this.$emit.currentPage) a[i].className = 'current';
            }
        },

        // write pagination
        Finish: function() {
            this.e.innerHTML = this.code;
            this.code = '';
            this.Bind();
            this.$emit("pageChanged", this.$emit.currentPage)
        },

        // find pagination type
        Start: function() {
            if (this.size < this.step * 2 + 6) {
                this.Add(1, this.size + 1);
            }
            else if (this.$emit.currentPage < this.step * 2 + 1) {
                this.Add(1, this.step * 2 + 4);
                this.Last();
            }
            else if (this.$emit.currentPage > this.size - this.step * 2) {
                this.First();
                this.Add(this.size - this.step * 2 - 2, this.size + 1);
            }
            else {
                this.First();
                this.Add(this.$emit.currentPage - this.step, this.$emit.currentPage + this.step + 1);
                this.Last();
            }
            this.Finish();
        },

        // create skeleton
        Create: function(e) {

            const html = [
                '<a class="pagination__prevPage">&#9668;</a>', // previous button
                '<span></span>',  // pagination container
                '<a class="pagination__nextPage">&#9658;</a>'  // next button
            ];

            e.innerHTML = html.join('');
            this.e = e.getElementsByTagName('span')[0];
        },

        // init
        Init: function(e, data) {
            this.Extend(data);
            this.Create(e);
            this.Start();
        }
    },
    mounted(){
        this.Init(document.getElementById('pagination'), {
            size: Math.ceil(this.total/this.perPage),
            page: this.$emit.currentPage,
            step: this.step
        });
    },
}

</script>

<style scoped>
#pagination {
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
    padding: 5px;
    background: rgb(82, 15, 117);
}
#pagination >>> a, #pagination >>> i {
    padding: 10px 0 10px 0;
    display: inline-block;
    vertical-align: middle;
    width: 35px;

    color: #181818;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    user-select: none;
}
@media screen and (max-width: 767px) {
    #pagination >>> a, #pagination >>> i {
        width: 7.5vw;
    }
}

#pagination >>> a {
    margin: 0 2px 0 2px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #E6E6E6;
}
#pagination >>> i {
    margin: 0 3px 0 3px;
}
#pagination >>> a.current {
    background-color: #820B8C;
}
</style>