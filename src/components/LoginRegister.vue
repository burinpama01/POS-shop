<template>
<q-form @submit="submitform">
    <q-input v-if="tab == 'register'" class="q-mb-md" outlined v-model="formData.name" label="Name" />
    <q-input class="q-mb-md" outlined v-model="formData.email" type="email" label="Email" />
    <q-input class="q-mb-md" outlined v-model="formData.password" type="password" label="Password" />
    <div class="row">
        <q-space/>
        <q-btn color="primary" type="submit" :label="tab" />
    </div>
</q-form>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: ['tab'],
    data(){
        return{
            formData:{
                name: '',
                email: '',
                password: '',
            }
        }
    },
    methods:{
        ...mapActions('store', ['registerUser', 'loginUser']),
        submitform(){
            if (this.tab == 'login'){
                console.log('login User')
                this.loginUser(this.formData)
            }else{
                console.log('Register User')
                this.registerUser(this.formData)
            }
        }
    }

}
</script>

<style>

</style>
