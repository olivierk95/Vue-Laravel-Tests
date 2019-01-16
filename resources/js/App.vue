<!-- We have defined our router-view. It is the directive that will render the component according to current URL. So, if our URL is /create, then it will present the CreateComponent on the webpage. -->

<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-between">
            <ul class="navbar-nav">

                <!-- <router-link> is the component for enabling user navigation in a router-enabled app. The target location is specified with the to prop. It renders as an <a> tag with correct href by default, but can be configured with the tag prop. In addition, the link automatically gets an active CSS class when the target route is active. -->

                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link">Create Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/posts" class="nav-link">Posts</router-link>
                </li>
            </ul>
            <div>
                <button type="button" class="btn btn-link text-white"><router-link to="/register">Inscription</router-link></button>
                <button type="button" class="btn btn-link text-white"><router-link to="/connect">Connection</router-link></button>
            </div>
        </nav><br />
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default {
    }
</script>

