<template>
         <footer class="footer px-5">
            <img src="/assets/logo-agronomiq-cor-pb.png" alt="Logo" class="logo" />

            <div>
                <div class="footer-topic">Topic</div>
                <div>Page</div>
                <div>Page</div>
                <div>Page</div>
            </div>
            <div>
                <div class="footer-topic">Topic</div>
                <div>Page</div>
                <div>Page</div>
                <div>Page</div>
            </div>
            <div>
                <div class="footer-topic">Topic</div>
                <div>Page</div>
                <div>Page</div>
                <div>Page</div>
            </div>
        </footer>
</template>
<style scoped>
.footer {
  background: #f5f5f5;
  margin-top: 32px;
  padding: 24px;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.footer img.logo {
  width: 100px;
  height: auto;
  margin-bottom: 16px;
}

.footer-topic {
  font-weight: 600;
  margin-bottom: 4px;
}
</style>