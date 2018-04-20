<template>
	<el-row>
		<el-col :span="12" :offset="6">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="书名" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="价格" prop="price">
					<el-input-number v-model="addForm.price" :min="0" :max="200"></el-input-number> 元
				</el-form-item>
				<el-form-item label="库存" prop="stock">
					<el-input-number v-model="addForm.stock" :min="0" :max="999"></el-input-number> 本
				</el-form-item>
				<el-form-item label="图片">
					<img :src="addForm.pic" />
					<el-upload
							action="https://jsonplaceholder.typicode.com/posts/"
							list-type="picture-card"
							:on-preview="handlePictureCardPreview"
							:on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
				</el-form-item>
			</el-form>
			<div class="footer">
				<el-button type="primary" @click="">提交</el-button>
			</div>
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
                dialogImageUrl: '',
                dialogVisible: false
			}
		},
		methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
		}
	}

</script>

<style scoped>
	.footer{
		margin: 50px 0;
		text-align: center;
	}
</style>