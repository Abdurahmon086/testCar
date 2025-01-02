<script lang="ts" setup></script>
<template>
    <div class="bg-[#F6F6F6] w-full min-h-screen flex flex-col">
        <header>
            <LayoutsHeaderTop />
            <div class="bg-white">
                <LayoutsHeader />
            </div>
        </header>
        <main class="flex-grow">
            <slot />
        </main>
        <footer>
            <LayoutsFooter />
        </footer>
    </div>
</template>

<style></style>
