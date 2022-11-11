<template>
    <main>
        <AppNavbar />
        <NuxtPage />
    </main>
</template>

<style>
html, body, main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

main {
    display: flex;
    flex-direction: column;
}
</style>
