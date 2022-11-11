<script setup lang="ts">
import { subjectMap } from '~~/data';

const subjectChoice = ref("all");
</script>

<template>
    <AppView>
        <div class="hero">
            <div class="hero-body">
                <h1 class="title is-1">LuhCollege</h1>
                <p class="subtitle">find luh college that's perfect for you</p>
                <form class="field has-addons" @submit.prevent="$router.push(`/rankings/${subjectChoice}`)">
                    <p class="control">
                        <div class="select">
                            <select v-model="subjectChoice" name="subject">
                                <option 
                                    v-for="(subjectName, subjectSlug) of subjectMap" 
                                    :key="subjectSlug" 
                                    :value="subjectSlug"
                                >
                                    {{ subjectName }}
                                </option>
                            </select>
                        </div>
                    </p>
                    <p class="control">
                        <button type="submit" class="button is-link">
                            lets go lets go
                        </button>
                    </p>
                </form>
            </div>
        </div>
    </AppView>
</template>