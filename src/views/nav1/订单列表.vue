<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="订单编号"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="list" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column prop="id" label="订单编号">
			</el-table-column>
			<el-table-column label="订单商品" width="200" sortable>
				<template slot-scope="scope">
					<img :src="scope.row.pic" style="margin: 10px; height: 50%"/>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="收货人" sortable>
			</el-table-column>
			<el-table-column prop="price" label="订单金额(元)" sortable>
			</el-table-column>
			<el-table-column prop="time" label="下单时间" sortable>
			</el-table-column>
			<el-table-column prop="state" label="订单状态" sortable>
			</el-table-column>
			<el-table-column label="操作" width="200">
				<template slot-scope="scope">
					<el-button type="primary" size="small" @click=" ">查看</el-button>
					<el-button type="danger" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
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
                        name: '张三',
                        price: 18.00,
						state: '已完成',
						time: '2004-11-06',
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_01.gif'
                    },{
                        id: 2,
                        name: '李四',
                        price: 22.80,
                        state: '已付款',
                        time: '2004-11-06',
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_02.gif'
                    },{
                        id: 3,
                        name: '王五',
                        price: 25.80,
                        state: '已取消',
                        time: '2004-11-06',
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_03.gif'
                    },{
                        id: 4,
                        name: '马六',
                        price: 332.50,
                        state: '已退款',
                        time: '2004-11-06',
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_04.gif'
                    },{
                        id: 5,
                        name: '钱七',
                        price: 35.50,
                        state: '已发货',
                        time: '2004-11-06',
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_05.gif'
                    },{
                        id: 6,
                        name: '孙八',
                        price: 36.50,
                        state: '已完成',
                        time: '2004-11-06',
                        pic: 'http://p7f6eba64.bkt.clouddn.com/book_06.gif'
                    }
                ],
                total: 1,
                page: 1,
                listLoading: false,
            }
        },
        mounted() {
        },
        methods: {
            handleCurrentChange(val) {
                this.page = val;
            },
        },
    }

</script>

<style scoped>

</style>