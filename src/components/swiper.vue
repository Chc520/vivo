<template>
	<div>
		<div class="swiper-container">
			<div class="my-pagination">
				<ul class="my-pagination-ul">
					<li class="swiper-pagination-bullet swiper-pagination-bullet-active">手机</li>
					<li class="swiper-pagination-bullet">固话</li>
				</ul>
			</div>
			<div class="swiper-wrapper">

				<div class="swiper-slide">
					<!--手机绑定GO-->
					<div class="user_zc_body">
						<ul>

							<li>
								<p class="p_input"><em class="fa fa-tablet" style="font-size:18px;"></em><input type="tel" placeholder="请输入手机号"></p>
							</li>
							<li>
								<p class="p_input p_input_yzm"><em class="fa  fa-envelope" style="font-size:14px;"></em><input type="text" placeholder="请输入验证码"><span class="sp_btn">获取验证码</span></p>
							</li>

						</ul>
					</div>
					<div class="user_zc_btn">
						<p class="p_btn">
							<a href="#" class="c_4">立即绑定</a>
						</p>
					</div>

					<!--手机绑定END-->

				</div>

				<div class="swiper-slide">

					<!--固话绑定GO-->
					<div class="user_zc_body">
						<ul>

							<li>
								<p class="p_input"><em class="fa fa-user" style=""></em><input type="text" placeholder="客户号 / 开户人姓名"></p>
							</li>
							<li>
								<p class="p_input "><em class="fa fa-lock"></em><input type="text" placeholder="服务密码 / 开户人身份证号"></p>
							</li>

						</ul>
					</div>
					<div class="user_zc_btn">
						<p class="p_btn">
							<a href="#" class="c_4">立即绑定</a>
						</p>
					</div>

					<!--固话绑定END-->

				</div>

			</div>

		</div>
	</div>
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'
export default {
	methods: {
		fn() {
			new Swiper('.swiper-container', {
						pagination: '.my-pagination-ul',
						paginationClickable: true,
						paginationBulletRender: function(index, className) {
								switch(index) {
									case 0:
										name = '手机';
										break;
									case 1:
										name = '固话';
										break;
									case 2:
										name = '你好';
										break;
									case 3:
										name = '我好';
										break;
									default:
										name ='';
						}
						return '<li class="' + className + '">' + name + '</li>';
					}
				})
			}
	},
	mounted(){
		this.fn();
	}
	}
</script>
<style>
	@import url("../assets/css/swiper.min.css");
	*{
		margin: 0;padding: 0;
		font-size: 0.15rem;
	}
</style>