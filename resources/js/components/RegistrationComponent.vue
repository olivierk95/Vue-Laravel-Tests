<template>
    <div>
        <h1>Registration</h1>
        <form @submit.prevent="addUser" method="POST">
        <input type="hidden" name="_token" :value="csrf">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group d-flex">
                        <div>
                            <label>Last Name:</label>
                            <input type="text" class="form-control" v-model="user.lastname">
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input type="text" class="form-control" v-model="user.firstname">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="user.email">
                    </div>
                    <!-- <div class="form-group">
                        <label>Confirm email:</label>
                        <input type="email" class="form-control">
                    </div> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password:</label>
                        <input type="password" class="form-control" name="password" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label>Confirm password:</label>
                        <input type="password" class="form-control" name="password_confirmation" v-model="user.password_confirmation" ref="password">
                    </div>  
                </div>
            </div><br />
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            addUser() {
                let url='http://localhost:8000/api/register';
                this.axios.post(url, this.user).then((response) => {
                    this.user = response.data.data;
                });
            }
        }
    }
</script>