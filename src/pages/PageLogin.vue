<template>
<q-page class="flex q-pa-md">
    <q-card class="full-width">
        <q-tabs v-model="tab" dense class="bg-grey-3 text-grey-7" active-color="primary" indicator-color="purple" align="justify">
            <q-tab name="login" label="Login" />
            <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="login">
                <login-register :tab='tab'/>
            </q-tab-panel>

            <q-tab-panel name="register">
                <login-register :tab='tab'/>
            </q-tab-panel>
        </q-tab-panels>
    </q-card>
</q-page>
</template>

<script>
export default {
    data() {
        return {
            tab: 'login',

        }
    },
    components: {
        'login-register': require('components/LoginRegister.vue').default
    }
}
</script>

<style>
</style>
