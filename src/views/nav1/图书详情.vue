<template>
	<el-row>
		<el-col :span="12" :offset="6">
			<el-form :model="addForm" label-width="80px" ref="addForm">
				<el-form-item label="书名：">
					<span>{{addForm.name}}</span>
				</el-form-item>
				<el-form-item label="价格：">
					<span>{{addForm.price}}</span> 元
				</el-form-item>
				<el-form-item label="库存：">
					<span>{{addForm.stock}}</span> 本
				</el-form-item>
				<el-form-item label="图片：">
					<img :src="addForm.pic" />
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
    import util from '../../common/js/util'
    //import NProgress from 'nprogress'
    import * as getData from '../../api/api';

    export default {
        data() {
            return {
                addForm: {
                    id: 1,
                    name: '泰戈尔诗集',
                    price: 18.00,
                    stock: 999,
                    pic: 'http://p7f6eba64.bkt.clouddn.com/book_01.gif'
                },
                addFormRules: {
                    name: [
                        { required: true, message: '请填写书名', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '请填写价格', trigger: 'blur' }
                    ],
                    stock: [
                        { required: true, message: '请填写库存', trigger: 'blur' }
                    ],
                    pic: [
                        { required: true, message: '请选择该书图片', trigger: 'blur' }
                    ]
                },
            }
        },
        methods: {

        }
    }

</script>

<style scoped>
	span,img{
		margin-left: 50px;
	}
</style>