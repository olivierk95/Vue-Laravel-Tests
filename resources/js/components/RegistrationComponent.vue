<template>
    <div>
        <h1>Registration</h1>
        <form @submit.prevent="addUser" method="POST">
            <input type="hidden" name="_token" :value="csrf">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group d-flex">
                        <div style="margin-right:10px">
                            <label>Last Name:</label>
                            <input type="text" name="lastname" class="form-control" :class="{'border-danger': errors.has('lastname')}" v-model="user.lastname" v-validate="'required|min:2|max:255'" autofocus>
                            <span v-show="errors.has('lastname')">{{ errors.first('lastname') }}</span>
                        </div>
                        <div>
                            <label>First Name:</label>
                            <input type="text" name="firstname" class="form-control" :class="{'border-danger':errors.has('firstname')}" v-model="user.firstname" v-validate="'required|min:2|max:255'" autofocus>
                            <span v-show="errors.has('firstname')">{{ errors.first('firstname') }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" :class="{'border-danger':errors.has('email')}" v-model="user.email" name="email" v-validate="'required|email|max:255'" ref="email" autofocus>
                        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group">
                        <label>Confirm email:</label>
                        <input type="email" class="form-control" :class="{'border-danger':errors.has('email_confirmation')}" name="email_confirmation" v-model="user.email_confirmation" v-validate="'required|email|max:255|confirmed:email'" autofocus>
                        <span v-show="errors.has('email_confirmation')">You must confirm your email address.</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password:</label>
                        <input type="password" class="form-control" :class="{'border-danger':errors.has('password')}" name="password" v-model="user.password" v-validate="'required|alpha_num|min:6'" ref="password" autofocus>
                        <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    </div>
                    <div class="form-group">
                        <label>Confirm password:</label>
                        <input type="password" class="form-control" :class="{'border-danger':errors.has('password_confirmation')}" name="password_confirmation" v-model="user.password_confirmation" v-validate="'required|alpha_num|min:6|confirmed:password'" autofocus>
                        <span v-show="errors.has('password_confirmation')">You must confirm your password.</span>
                    </div>  
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary" type="submit" :disabled="errors.any()">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    lastname: "",
                    firstname: "",
                    email: "",
                    email_confirmation: "",
                    password: "",
                    password_confirmation: ""
                },
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('value'),
            }
        },
       
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        alert('From Submitted!');
                        return;
                    }
                });
            },
            addUser() {
                let url='http://localhost:8000/api/register';
                this.axios.post(url, this.user).then((response) => {
                    this.user = response.data.data;
                });
               
            }
        },
    }
</script>