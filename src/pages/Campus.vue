<script setup lang="ts">
import { ContactForm } from 'src/types/ContactType';
import { Ref, ref } from 'vue';



const contactForm = ref<ContactForm>({} as ContactForm)
</script>

<template>
    <section class="py-16 md:py-24 bg-gradient-to-b">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h1 class="text-3xl md:text-4xl font-black mb-4" > Sobre Nuestro Campus</h1>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Un espacio dedicado a formar futbolistas completos, combinando excelencia deportiva, valores fundamentales y desarrollo personal</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold" style="font-family: Montserrat, sans-serif">Nuestra Historia</h2>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Fundado en 2009, nuestro Campus de Fútbol nació de la visión de crear un espacio donde los jóvenes pudieran desarrollar su potencial futbolístico en un ambiente profesional y motivador. Desde entonces, hemos formado a más de 500 jugadores, muchos de los cuales han continuado su carrera en equipos profesionales y academias de prestigio.</p>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Nuestro enfoque integral combina entrenamiento técnico de alta calidad con la transmisión de valores deportivos fundamentales. Creemos que el fútbol es más que un deporte: es una escuela de vida que desarrolla disciplina, trabajo en equipo y superación personal.</p>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">A lo largo de los años, hemos ganado 28 campeonatos a nivel regional y nacional, consolidando nuestra reputación como uno de los campus de formación más destacados del país.</p>

                </div>
                <div class="space-y-4">
                    <div class="rounded-lg overflow-hidden">
                        <img class="w-full h-64 object-cover" src="img/Soccer_training_facility_field_28f51f97.png">
                    </div>
                    <div class="rounded-lg overflow-hidden">
                        <img class="w-full h-64 object-cover" src="img/Trophy_and_medals_display_ec78f7af.png">
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <!-- Carta1 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-3"><q-icon name="download_done" color="secondary" size="2.4em"></q-icon></div>
                    <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >15+</div>
                    <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Años de Experiencia</div>
                </div>
                <!-- Carta2 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-3"><q-icon name="group" color="secondary" size="2.4em"></q-icon></div>
                    <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >500+</div>
                    <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Estudiantes Formados</div>
                </div>
                <!-- Carta3 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-3"><q-icon name="sports" color="secondary" size="2.4em"></q-icon></div>
                    <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >12</div>
                    <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Entrenadores Profesionales</div>
                </div>
                <!-- Carta4 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-3"><q-icon name="military_tech" color="secondary" size="2.4em"></q-icon></div>
                    <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >28</div>
                    <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Campeonatos Ganados</div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h1 class="text-3xl md:text-4xl font-black mb-4" >Nuestros Valores</h1>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Principios fundamentales que guían nuestra formación deportiva y personal</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <!-- Card1 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-4"><q-icon name="star" color="secondary" size="3.9em"></q-icon></div>
                    <h3 class="text-xl font-bold mb-2">Excelencia</h3>
                    <p class="text-sm text-muted-foreground">Buscamos la mejora continua en cada entrenamiento, fomentando el desarrollo técnico y táctico de máxima calidad.</p>
                </div>

                <!-- Card2 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-4"><q-icon name="favorite" color="secondary" size="3.9em"></q-icon></div>
                    <h3 class="text-xl font-bold mb-2">Pasión</h3>
                    <p class="text-sm text-muted-foreground">Transmitimos el amor por el fútbol, creando una experiencia única que inspira a cada jugador a dar lo mejor de sí.</p>
                </div>

                <!-- Card3 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-4"><q-icon name="shield" color="secondary" size="3.9em"></q-icon></div>
                    <h3 class="text-xl font-bold mb-2">Respeto</h3>
                    <p class="text-sm text-muted-foreground">Promovemos valores de fair play, trabajo en equipo y respeto hacia compañeros, rivales y entrenadores.</p>
                </div>

                <!-- Card4 -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
                    <div class="flex justify-center mb-4"><q-icon name="group" color="secondary" size="3.9em"></q-icon></div>
                    <h3 class="text-xl font-bold mb-2">Trabajo en Equipo</h3>
                    <p class="text-sm text-muted-foreground">Desarrollamos habilidades sociales y de colaboración esenciales tanto dentro como fuera del campo.</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="rounded-lg overflow-hidden order-2 md:order-1">
                    <img class="w-full h-full object-cover" src="img/Team_huddle_motivation_moment_4dce313b.png">
                </div>

                <div class="space-y-6 order-1 md:order-2 flex flex-col justify-center">
                    <h3 class="text-2xl font-bold" style="font-family: Montserrat, sans-serif;">Formación Integral</h3>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">En nuestro campus, entendemos que formar un futbolista va más allá de enseñar técnicas y tácticas. Trabajamos en el desarrollo integral de cada jugador, cultivando su carácter, disciplina y valores que les servirán tanto dentro como fuera del campo.</p>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Nuestros entrenadores actúan como mentores, guiando a los jóvenes en su crecimiento personal y deportivo, creando un ambiente donde pueden desarrollar confianza, liderazgo y resiliencia.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center" style="height: 45px;">
                        <q-btn label="INSCRIBETÉ AHORA"  color="secondary" text-color="black" class="font-bold-btn" ></q-btn>
                        
                    </div>
                </div>

            </div>
        </div>
    </section >
        
    <section class="py-16 md:py-24 bg-muted/30">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-black mb-4">Programas por Categoría</h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Entrenamiento especializado adaptado a cada etapa de desarrollo</p>
            </div>
            <div class="grid lg:grid-cols-3 gap-6 mb-16">
                <div class="shadcn-card rounded-xl border bg-card-2 border-card-border-2 text-card-foreground shadow-sm p-6">
                    <div class="mb-4">
                        <h3 class="text-2xl font-bold mb-1">Sub-8 y Sub-10</h3>
                        <p class="text-sm text-secondary font-medium">6-10 años</p>
                    </div>
                    <p class="text-muted-foreground mb-4">Iniciación al fútbol con ejercicios lúdicos centrados en el desarrollo de habilidades motoras básicas, coordinación y familiarización con el balón.</p>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Juegos recreativos</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Desarrollo motor</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Técnica básica</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Socialización</span>
                        </div>
                    </div>
                </div>

                <div class="shadcn-card rounded-xl border bg-card-2 border-card-border-2 text-card-foreground shadow-sm p-6">
                    <div class="mb-4">
                        <h3 class="text-2xl font-bold mb-1">Sub-12 y Sub-14</h3>
                        <p class="text-sm text-secondary font-medium">10-14 años</p>
                    </div>
                    <p class="text-muted-foreground mb-4">Perfeccionamiento técnico y comprensión táctica del juego. Énfasis en control, pase, regate y posicionamiento en el campo.</p>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Fundamentos técnicos</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Táctica básica</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Juego en equipo</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Competición local</span>
                        </div>
                    </div>
                </div>

                <div class="shadcn-card rounded-xl border bg-card-2 border-card-border-2 text-card-foreground shadow-sm p-6">
                    <div class="mb-4">
                        <h3 class="text-2xl font-bold mb-1">Sub-16 y Sub-18</h3>
                        <p class="text-sm text-secondary font-medium">14-18 años</p>
                    </div>
                    <p class="text-muted-foreground mb-4">Formación avanzada con enfoque en táctica compleja, preparación física específica y desarrollo del liderazgo en el campo.</p>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Táctica avanzada</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Preparación física</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Competición regional</span>
                        </div>
                         <div class="flex items-center gap-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                            <span class="text-sm">Desarrollo profesional</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold" style="font-family: Montserrat, sans-serif">Metodología de Entrenamiento</h2>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Nuestra metodología se basa en las mejores prácticas de academias europeas de élite, adaptadas a las necesidades y características de nuestros jugadores. Cada sesión está cuidadosamente planificada para maximizar el desarrollo técnico, táctico y físico.</p>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Utilizamos tecnología de análisis de rendimiento para monitorear el progreso individual de cada jugador, identificando fortalezas y áreas de mejora. Los entrenamientos incluyen ejercicios específicos de posición, situaciones de juego real y competiciones internas que preparan a los jugadores para partidos oficiales.</p>
                </div>
                <div class="rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover" src="img/Training_session_dribbling_practice_7cc5a3bd.png">
                </div>
            </div>
        </div>
    </section>
    <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-black mb-4">Instalaciones de Primera Clase</h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Espacios diseñados para potenciar el rendimiento y bienestar de nuestros jugadores</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <!-- Carta -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
                    <div class="flex items-start gap-3 mb-3">
                        <q-icon name="history" color="secondary" size="1.9em"></q-icon>
                        <h3 class="text-lg font-bold">Campos de Césped Natural</h3>
                    </div>
                    <p class="text-sm text-muted-foreground">3 campos profesionales de césped natural con sistema de riego automatizado y drenaje profesional para entrenar en las mejores condiciones.</p>
                </div>

                <!-- Carta -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
                    <div class="flex items-start gap-3 mb-3">
                        <q-icon name="history" color="secondary" size="1.9em"></q-icon>
                        <h3 class="text-lg font-bold">Campos de Césped Natural</h3>
                    </div>
                    <p class="text-sm text-muted-foreground">3 campos profesionales de césped natural con sistema de riego automatizado y drenaje profesional para entrenar en las mejores condiciones.</p>
                </div>

                <!-- Carta -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
                    <div class="flex items-start gap-3 mb-3">
                        <q-icon name="history" color="secondary" size="1.9em"></q-icon>
                        <h3 class="text-lg font-bold">Campos de Césped Natural</h3>
                    </div>
                    <p class="text-sm text-muted-foreground">3 campos profesionales de césped natural con sistema de riego automatizado y drenaje profesional para entrenar en las mejores condiciones.</p>
                </div>

                <!-- Carta -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
                    <div class="flex items-start gap-3 mb-3">
                        <q-icon name="history" color="secondary" size="1.9em"></q-icon>
                        <h3 class="text-lg font-bold">Campos de Césped Natural</h3>
                    </div>
                    <p class="text-sm text-muted-foreground">3 campos profesionales de césped natural con sistema de riego automatizado y drenaje profesional para entrenar en las mejores condiciones.</p>
                </div>

                <!-- Carta -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
                    <div class="flex items-start gap-3 mb-3">
                        <q-icon name="history" color="secondary" size="1.9em"></q-icon>
                        <h3 class="text-lg font-bold">Campos de Césped Natural</h3>
                    </div>
                    <p class="text-sm text-muted-foreground">3 campos profesionales de césped natural con sistema de riego automatizado y drenaje profesional para entrenar en las mejores condiciones.</p>
                </div>

                <!-- Carta -->
                <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
                    <div class="flex items-start gap-3 mb-3">
                        <q-icon name="history" color="secondary" size="1.9em"></q-icon>
                        <h3 class="text-lg font-bold">Campos de Césped Natural</h3>
                    </div>
                    <p class="text-sm text-muted-foreground">3 campos profesionales de césped natural con sistema de riego automatizado y drenaje profesional para entrenar en las mejores condiciones.</p>
                </div>
            </div>
            <div class="grid md:grid-cols-3 gap-4">
                <div class="rounded-lg overflow-hidden"><img class="w-full h-48 object-cover" src="img/Soccer_training_facility_field_28f51f97.png"></div>
                <div class="rounded-lg overflow-hidden"><img class="w-full h-48 object-cover" src="img/Clean_modern_locker_room_eea1995d.png"></div>
                <div class="rounded-lg overflow-hidden"><img class="w-full h-48 object-cover" src="img/Coach_teaching_young_players_c8a943a8.png"></div>
            </div>
        </div>
    </section>
    <section class="py-16 md:py-24 bg-muted/30">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-black mb-4">Equipo Técnico</h2>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Profesionales cualificados con pasión por la formación deportiva</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="rounded-lg overflow-hidden order-2 md:order-1">
                    <img class="w-full h-full object-cover" src="img/Coach_teaching_young_players_c8a943a8.png">
                </div>

                <div class="space-y-6 order-1 md:order-2 flex flex-col justify-center">
                    <h3 class="text-2xl font-bold" style="font-family: Montserrat, sans-serif; font-size: 30px;">Entrenadores Profesionales</h3>
                    <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Nuestro equipo técnico está compuesto por 12 entrenadores certificados con licencias UEFA y experiencia en fútbol profesional. Cada entrenador se especializa en categorías específicas, asegurando que los jugadores reciban la orientación más adecuada para su nivel de desarrollo.</p>
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-bold mb-2" style="font-family: Montserrat, sans-serif; font-size: 18px;">Cuerpo Técnico:</h4>
                            <ul class="space-y-2 text-muted-foreground">
                                <li class="flex items-center gap-2">
                                    <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                                    <span style="font-family: Montserrat, sans-serif; font-size: 17px;">Entrenadores con licencia UEFA Pro y A</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                                    <span style="font-family: Montserrat, sans-serif; font-size: 17px;">Preparadores físicos especializados en edad juvenil</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                                    <span style="font-family: Montserrat, sans-serif; font-size: 17px;">Fisioterapeutas deportivos certificados</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                                    <span style="font-family: Montserrat, sans-serif; font-size: 17px;">Nutricionistas deportivos</span>
                                </li>
                                <li class="flex items-center gap-2">
                                    <div class="h-1.5 w-1.5 rounded-full bg-secundary"></div>
                                    <span style="font-family: Montserrat, sans-serif; font-size: 17px;">Psicólogos deportivos para apoyo mental</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">

</style>