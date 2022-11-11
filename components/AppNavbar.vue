<script setup lang="ts">
import { whileStatement } from '@babel/types';

const isOpen = ref(false);
</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
                <b>LuhCollege</b>
            </NuxtLink>

            <a 
                role="button" 
                class="navbar-burger" 
                aria-label="menu" 
                aria-expanded="false" 
                @click="isOpen = !isOpen;"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" :class="[isOpen && 'is-active']">
            <div class="navbar-start">
                <NuxtLink class="navbar-item" to="/rankings">
                    Rankings
                </NuxtLink>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <NuxtLink class="navbar-item" to="/why">
                            Why make this?
                        </NuxtLink>
                        <NuxtLink class="navbar-item" to="/contact">
                            Get in touch
                        </NuxtLink>
                        <hr class="navbar-divider">
                        <NuxtLink class="navbar-item" to="/contact?reason=issue">
                            Report an issue
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar, .navbar-menu, .navbar-item.has-dropdown, .navbar-dropdown {
    background: var(--black-bis);
    box-shadow: none;
}

.navbar-menu.is-active {
    border-top: 2px solid var(--black-ter);
}

.navbar-divider {
    background: var(--black-ter);
}

.navbar-item:hover, .navbar-link:hover {
    background: var(--black-ter);
    color: white;
}

.navbar-item.has-dropdown:hover .navbar-link {
    background: transparent !important;
}

.navbar-dropdown {
    border-top: none;
}

.navbar * {
    color: white;
}
</style>