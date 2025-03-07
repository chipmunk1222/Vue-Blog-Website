<template>
	<div class="message-area-container">
		<form @submit.prevent="handleSubmit" action="" class="form-container">
			<div class="form-item">
				<input
					class="input-name"
					maxlength="10"
					type="text"
					placeholder="用户昵称"
					v-model="formData.nickname"
				/>
				<span class="input-name-aside">{{ formData.nickname.length }}/10</span>
			</div>
			<div class="error">{{ error.nickname }}</div>
			<div class="form-item">
				<textarea
					class="input-area"
					type="placeholder"
					placeholder="输入内容"
					maxlength="300"
					style="resize: none"
					v-model="formData.content"
				/>
				<span class="input-area-aside">{{ formData.content.length }}/300</span>
			</div>
			<div class="error">{{ error.content }}</div>
			<div class="form-item">
				<button :disabled="isSubmitting" class="form-submit" >
					{{isSubmitting?'提交中...':'提交'}}
				</button>
			</div>
		</form>
		<div class="comment-container">
			<div class="comment-title">
				<h2>
					{{title}}
					<span>({{ list.total }})</span>
				</h2>
			</div>
			<ul class="comment-list">
				<li v-for="item in list.row" :key="item.id">
					<div class="comment-list-thumb">
						<Avatar :size="50" :content="''" :url="item.avatar" />
					</div>
					<div class="comment-list-body">
						<div class="list-head">
							<h3>
								{{ item.nickname }}
							</h3>
							<span>{{ item.createDate }}</span>
						</div>
						<div class="list-body">
							<p>{{ item.content }}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
	data() {
		return {
			formData: {
				nickname: "",
				content: "",
			},
			error: {
				nickname: "",
				content: "",
			},
			isSubmitting: false,
		};
	},
	props: {
		title:{
			type: String,
      required: false,
			default: "评论",
		},
		list: {
			type: Object,
			required: true,
		},
	},
	methods: {
		handleSubmit() {
			this.isSubmitting = true;
			if(!this.formData.nickname){
				this.error.nickname = "请填写昵称";
			}
			if(!this.formData.content){
				this.error.content = "请填写评论内容";
			}
			if(this.formData.nickname && this.formData.content){
				this.error.nickname = "";
				this.error.content = "";
				this.$emit("submit", this.formData,()=>{
					this.formData.nickname='';
					this.formData.content='';
					this.isSubmitting = false;
				});
			}
			if(this.error.nickname || this.error.content){
				this.isSubmitting = false;
				return;
			}
		}
	},
	components: {
		Avatar,
	},
};
</script>

<style scoped lang="scss">
@import "@/assets/style/var.scss";
.message-area-container {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
}
.form-container {
	position: relative;
	display: flex;
	flex-direction: column;
}
.form-item {
	position: relative;
	margin: 10px 0;
	margin-bottom: 3px;
	box-sizing: border-box;
	&:nth-of-type(1) {
		width: 400px;
		height: 30px;
	}
	&:nth-of-type(3) {
		width: 600px;
		height: 100px;
	}
	.input-name,
	.input-area {
		width: 100%;
		height: 100%;
		border: 1px dashed $lightWords;
		border-radius: 4px;
		padding: 5px 10px;
		box-sizing: border-box;
	}
	span {
		position: absolute;
		right: 5px;
		bottom: 5px;
		font-size: 12px;
		color: $gray;
	}
	.form-submit {
		width: 75px;
		height: 30px;
		color: #fff;
		background-color: $primary;
		border: 0;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-color: darken($primary, 20%);
		}
		&:disabled {
			cursor: not-allowed;
			background-color: lighten($primary, 20%);
		}
	}
}
.error {
	font-size: 12px;
	color: red;
}
.comment-container {
	position: relative;
	display: flex;
	flex-direction: column;
	.comment-title {
		display: flex;
		margin: 0;
		h2 {
			font-size: 20px;
			font-weight: 600;
			span {
				margin-left: 10px;
			}
		}
	}
}
.comment-list {
	position: relative;
	padding: 0;
	margin: 0;
	li {
		position: relative;
		display: flex;
		width: 100%;
		min-height: 100px;
		border-bottom: 1px solid $gray;
		.comment-list-thumb {
			margin: 15px 15px 0 0;
		}
	}
}
.comment-list-body {
	position: relative;
	width: 100%;
	.list-head {
		display: flex;
		justify-content: space-between;
		h3 {
			color: $success;
			font-size: 17px;
		}
		span {
			margin: auto 0;
			font-size: 11px;
			color: $lightWords;
		}
	}
	.list-body p {
		margin: 0;
		margin-bottom: 10px;
		font-size: 15px;
		color: $words;
		font-weight: 450;
	}
}
</style>
