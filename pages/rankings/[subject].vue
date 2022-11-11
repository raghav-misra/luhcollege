<script setup lang="ts">
import { subjectMap, subjectTaglineMap, colleges } from '~~/data';

const route = useRoute();
const router = useRouter();

const subjectSlug = route.params.subject as keyof typeof subjectMap;
const subjectName = subjectMap[subjectSlug];
const subjectTagline = subjectTaglineMap[subjectSlug];

if (!subjectName) {
    router.push("/rankings/all");
}

const sortedColleges = colleges
// .map(c => ({
//     ...c,
//     usnews: Math.trunc(c.usnews * 1000 / 212) / 10,
//     money: Math.trunc(c.money * 1000 / 51) / 10,
//     niche: Math.trunc(c.niche * 10000 / 495) / 10,
//     qs: Math.trunc(c.qs * 1000 / 521) / 10,
// }))
.map(c => ({
    ...c,
    average: Math.round(10 * (((0.45 * c.usnews) + (0.20 * c.money) + (0.20 * c.niche) + (0.10 * c.qs)))) / 10
})).sort((a, b) => a.average - b.average);
</script>

<template>
    <AppView>
        <div class="hero is-dark">
            <div class="hero-body">
                <h1 class="title is-2">Best {{ subjectName }} Schools</h1>
                <p class="subtitle">{{ subjectTagline }}</p>
            </div>
        </div>

        <section class="hero-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>College</th>
                        <th>US News 40</th>
                        <th>Money 25</th>
                        <th>Niche 25</th>
                        <th>QS World 10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(college, i) in sortedColleges" :key="college.name">
                        <td><b>#{{ i + 1 }}</b><sub>~{{ college.average }}</sub></td>
                        <td>
                            {{ college.name }}
                        </td>
                        <td>{{ college.usnews }}</td>
                        <td>{{ college.money }}</td>
                        <td>{{ college.niche }}</td>
                        <td>{{ college.qs }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </AppView>
</template>