<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="书名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="$router.push('/form')">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="list" highlight-current-row @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="id" label="Id" width="80">
			</el-table-column>
			<el-table-column prop="name" label="书名" sortable>
			</el-table-column>
			<el-table-column prop="price" label="价格" width="150" sortable>
			</el-table-column>
			<el-table-column prop="stock" label="库存" width="150" sortable>
			</el-table-column>
			<el-table-column label="图片" width="200" sortable>
				<template slot-scope="scope">
					<img :src="scope.row.pic" style="margin: 10px; height: 50%"/>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="200">
				<template slot-scope="scope">
					<el-button type="primary" size="small" @click="$router.push('/detail')">查看</el-button>
					<el-button size="small" @click="$router.push('/edit')">编辑</el-button>
					<el-button type="danger" size="small" @click="">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import * as getData from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				list: [
                    {
                        id: 1,
                        name: '泰戈尔诗集',
                        price: 18.00,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_01.gif'
                    },{
                        id: 2,
                        name: '痕记',
                        price: 22.80,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_02.gif'
                    },{
                        id: 3,
                        name: '天堂之旅',
                        price: 25.80,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_03.gif'
                    },{
                        id: 4,
                        name: '钱钟书集（全10册）',
                        price: 332.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_04.gif'
                    },{
                        id: 5,
                        name: '赵俪生高昭—夫妻回忆录',
                        price: 35.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_05.gif'
                    },{
                        id: 6,
                        name: '无聊斋（张绍刚首部随笔杂文作品）',
                        price: 36.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_06.gif'
                    },{
                        id: 7,
                        name: '一颗热土豆是一张温馨的床',
                        price: 37.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_07.gif'
                    },{
                        id: 8,
                        name: '李戡戡乱记',
                        price: 38.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_08.gif'
                    },{
                        id: 9,
                        name: '生生世世未了缘',
                        price: 39.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_09.gif'
                    },{
                        id: 10,
                        name: '一生有多少爱',
                        price: 310.50,
                        stock: 999,
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_10.gif'
                    }
                ],
				total: 1,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

			}
		},
        mounted() {
			getData.bannerList().then(res => { //测试外部接口（环鹏）

			})
        },
		methods: {
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
		},
	}

</script>

<style scoped>

</style>