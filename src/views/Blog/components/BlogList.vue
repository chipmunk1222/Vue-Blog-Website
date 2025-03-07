<template>
	<div class="blog-list-container" ref="container">
		<Loading v-if="isLoading" />
		<ul>
			<li v-for="item in data.row" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<RouterLink :to="{
						name:'BlogDetail',
						params:{
							id:item.id
						}
					}">
						<img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
					</RouterLink>
				</div>
				<div class="main">
					<RouterLink :to="{
						name:'BlogDetail',
						params:{
							id:item.id
						}
					}">
						<h2>{{ item.title }}</h2>
					</RouterLink>
					<div class="aside">
						<span>日期：{{ item.createDate }}</span>
						<span>浏览：{{ item.scanNumber }}</span>
						<span>评论：{{ item.commentNumber }}</span>
						<RouterLink :to="{
							name:'CategoryBlog',
							params: { category: item.category.id }
						}" >{{ item.category.name }}</RouterLink>
					</div>
					<div class="desc">{{ item.description }}</div>
				</div>
			</li>
		</ul>
		<Empty v-if="!isLoading && (!data.row || data.row.length === 0)" />
		<Pager
			v-if="this.data.total"
			:currentPage="this.routeInfo.page"
			:total="this.data.total"
			:limit="this.routeInfo.limit"
      @pageChange="handlePageChange"
		/>
		<ToTop />
	</div>
</template>

<script>
import fetchDate from "@/mixins/fetchData";
import Loading from "@/components/Loading";
import Pager from "@/components/Pager";
import * as blog from "@/api/blog.js";
import ToTop from '@/components/ToTop'
import setScrollToTop from '@/mixins/setScrollToTop'
import Empty from "@/components/Empty";
export default {
	mixins: [fetchDate([]),setScrollToTop('container')],
	computed: {
		routeInfo() {
			const categoryId = +this.$route.params.category || -1;
			const page = +this.$route.query.page || 1;
			const limit = +this.$route.query.limit || 10;
			return {
				categoryId,
				page,
				limit,
			};
		},
	},
	methods: {
		async fetchData() {
			return await blog.getBlogs(
				this.routeInfo.page,
				this.routeInfo.limit,
				this.routeInfo.categoryId
			);
		},
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      }
      if(this.routeInfo.categoryId === -1){
        this.$router.push({
          name:'Blog',
          query,
        });
      }else{
        this.$router.push({
          name:'CategoryBlog',
          params: { category: this.routeInfo.categoryId },
          query,
        });
      }
    },
	},
	components: {
		Pager,
		Loading,
		ToTop,
		Empty
	},
  watch:{
    async $route(){
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data =await this.fetchData();
      this.isLoading = false;
    }
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/var.scss";
.blog-list-container {
	line-height: 1.7em;
	width: 100%;
	height: 100%;
	padding: 20px;
	position: relative;
	overflow-y: scroll;
	box-sizing: border-box;
  scroll-behavior: smooth;
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
}

li {
	display: flex;
	flex-wrap: nowrap;
	padding: 20px 0;
	border-bottom: 1px solid #d2c7c7;
	.thumb {
		img {
			min-width: 180px;
			height: 150px;
			object-fit: fill;
			border-radius: 5px;
		}
	}
	.main {
		min-width: 400px;
		padding-left: 20px;
		padding-top: 5px;
		h2 {
			font-size: 28px;
			margin: 0;
		}
	}
	.aside {
		margin-bottom: 10px;
		font-size: 13px;
		color: $lightWords;
		span {
			margin-right: 20px;
		}
		a {
			text-decoration: none;
		}
	}
	.desc {
		line-height: 1.4em;
		font-size: 15px;
	}
}
</style>
