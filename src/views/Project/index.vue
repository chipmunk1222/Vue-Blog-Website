<template>
	<div class="project-container" ref="container">
		<Loading v-if="loading || !data " />
		<a
			:href="item.url ? item.url : `javascript:alert('打开失败');`"
			class="project-item"
			v-for="item in data"
			:key="item.id"
			:target="item.url ? '_blank' : '_self'"
		>
			<img :src="item.thumb" alt="" class="thumb" v-lazy="item.thumb" />
			<div class="project-item-info">
				<div class="item-title">
					{{ item.title }}
				</div>
				<div
					class="item-dsc"
					v-for="(des, index) in item.description"
					:key="index"
				>
					{{ des }}
				</div>
			</div>
		</a>
    <ToTop />
	</div>
</template>

<script>
import { mapState } from "vuex";
import Loading from "@/components/Loading";
import setScrollToTop from '@/mixins/setScrollToTop'
import ToTop from '@/components/ToTop'
export default {
  mixins:[setScrollToTop('container')],
	computed: mapState('project',{
		loading: 'loading',
		data: (state) => state.data,
	}),
	created() {
		this.$store.dispatch("project/fetchProject");
	},
	components: {
		Loading,
    ToTop
	},
};
</script>

<style scoped lang="scss">
.project-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 20px;
	position: relative;
	overflow-y: auto;
  scroll-behavior: smooth;
	box-sizing: border-box;
	.project-item {
		display: flex;
		width: 100%;
		height: 250px;
		margin-bottom: 25px;
		box-sizing: border-box;
		list-style-type: none;
		box-sizing: border-box;
		.thumb {
			object-fit: fill;
			width: 200px;
			min-height: 170px;
			flex: 0 0 auto;
			margin: 20px;
			// margin-left: 20px;
			border-radius: 5px;
		}
		.project-item-info {
			width: 100%;
			height: 100%;
			padding: 20px;
			flex: 1 1 auto;
			overflow-y: hidden;
			box-sizing: border-box;
			.item-title {
				margin-bottom: 5px;
				line-height: 40px;
				font-size: 1.5em;
				font-weight: bold;
			}
			.item-dsc {
				font-size: 16px;
				line-height: 30px;
			}
		}
		&:hover {
			border: 1px solid #eee;
			box-shadow: -2px 2px 5px rgba($color: #222, $alpha: 0.8),
				2px -2px 5px rgba($color: #eee, $alpha: 0.2);
			transform: translate(1.5px, -1.5px);
			transition: 0.1s linear;
		}
	}
}
</style>
