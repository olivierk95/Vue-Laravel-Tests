<template>
    <div>
        <h1>Connection</h1>
        <form method="POST">
        @csrf
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="user.email">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Password:</label>
                        <input type="password" class="form-control" v-model="user.password">
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return; 
        }
    }
</script>