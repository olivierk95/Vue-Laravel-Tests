<template>
    <div>
        <h1>Posts</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{name:'create'}" class="btn btn-primary">Create Post</router-link>
            </div>
        </div><br />

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key='post.id'>
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.body}}</td>
                    <td><router-link :to="{name: 'edit', params: {id: post.id}}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
                

<script>
    export default {
        data() {
            return {
                posts:[]
            }
        },
        created(){
            let url='http://localhost:8000/api/posts';
            this.axios.get(url).then(response => {
                this.posts = response.data.data;
                //Now, here, we need to write the data because axios is by default wrap our backend data posts with data and we are using the Resource Collection. So it will also wrap the data in the data key. So to get the actual data, we need to write like response.data.data
            });
        },
        methods: {
            deletePost(id) {
                let url=`http://localhost:8000/api/post/delete/${id}`;
                this.axios.delete(url).then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
            }
        }
    }
</script>
