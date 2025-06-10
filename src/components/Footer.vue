<template>
         <footer class="footer px-5">
            <img src="/assets/logo-agronomiq-cor-pb.png" alt="Logo" class="logo" />

            <div>
                <div class="info-footer"><i class="fa-solid fa-phone"></i> +55 (31) 98414-0614</div>
                <div class="info-footer"><i class="fa-solid fa-envelope"></i> contato@agronomiq.com.br</div>
            </div>
            <div>
              <div class="info-footer local"><i class="fa-solid fa-location-dot"></i> Contagem - MG</div>
                <div class="info-footer local"><i class="fa-solid fa-location-dot"></i> São Paulo - SP</div>
            </div>
            <div class="social-medias">
                <a href="#" class="social-media"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#" class="social-media"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="social-media"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="social-media"><i class="fa-brands fa-linkedin-in"></i></a>
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

.info-footer {
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 8px;
  margin-bottom: 8px;
  padding: .5rem 1rem;
  max-width: 250px;
}

.info-footer i {
  color: #677637;
}

.info-footer.local {
  background: #373737;
  border-radius: 8px; 
  color: white;
}

.social-medias {
  display: flex;
  align-items: start;
  justify-content: center;
  column-gap: 8px;
  font-size: 1.2rem;
}

.social-media {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #373737;
  color: white;
}
</style>