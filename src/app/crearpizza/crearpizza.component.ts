import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crearpizza',
  standalone: true,
  templateUrl: './crearpizza.component.html',
  styleUrls: ['./crearpizza.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CrearPizzaComponent {
  // Lista de ingredientes
  ingredientes = [
    {
      nombre: 'Masa Delgada',
      calorias: 150,
      imagen: 'https://images.pexels.com/photos/28866007/pexels-photo-28866007/free-photo-of-preparacion-de-masa-de-pizza-artesanal-con-luz-natural.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      precio: 2000
    },
    {
      nombre: 'Masa Gruesa',
      calorias: 200,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmpb731YCZefo_ApdFbzk2AN7hhifa7ySXbtlaRrMFD21kZK2qdgBQVLWuuCS2hqpI_s&usqp=CAU',
      precio: 2000
    },
    {
      nombre: 'Masa Crocante',
      calorias: 50,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrod6LyhbfFPZFjINO0G3MsapDOsEUqK3Pw&s',
      precio: 2500
    }
  ];
  quesos =[
    {
      nombre: 'Queso Mozarella' ,
      calorias: 22,
      imagen: 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2019/01/14/5e997adde64f0.jpeg',
      precio: 2200
    },
    {
      nombre: 'Queso Cheddar' ,
      calorias: 27,
      imagen: 'https://imarkt.co/wp-content/uploads/2021/04/Queso-Cheddar-a-Domicilio-en-Bogota.jpg',
      precio: 2200
    },
    {
      nombre: 'Queso Parmesano' ,
      calorias: 18,
      imagen: 'https://mygourmet.com.mx/wp-content/uploads/2022/04/queso-parmesano-uruguayo.webp',
      precio: 2200
    },
    {
      nombre:  'Queso Azul',
      calorias: 15,
      imagen: 'https://alpina.com/media/mageplaza/blog/post/t/o/todo-lo-que-necesitas-saber-del-queso-azul_1_.jpg',
      precio: 2200
    },
  ];
  carnes =[
    {
      nombre: 'Res',
      calorias: 222 ,
      imagen: 'https://thefoodtech.com/wp-content/uploads/2020/05/carne-de-res.jpg',
      precio: 2700
    },
    {
      nombre: 'Pollo',
      calorias:  333,
      imagen: 'https://i0.wp.com/www.buenossaborespanama.com/wp-content/uploads/2023/03/shredded-chicken-2023-03-02-03-44-31-utc-scaled.jpg?fit=2560%2C1707&ssl=1',
      precio: 2700
    },
    {
      nombre: 'Cerdo',
      calorias:  350,
      imagen: 'https://www.divinacocina.es/wp-content/uploads/lomo-de-cerdo-asado-entero.jpg',
      precio: 2700
    },
  ];
  especias =[
    {
      nombre: 'Oregano',
      calorias: 2,
      imagen: 'https://i0.wp.com/wokii.com/wp-content/uploads/2021/01/beneficios-oregano-scaled.jpg?fit=2560%2C1567&ssl=1',
      precio: 400
    },
    {
      nombre: 'Ajo en Polvo',
      calorias: 2,
      imagen: 'https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008058.jpg',
      precio: 400
    },
    {
      nombre: 'Paprika',
      calorias: 3,
      imagen: 'https://www.spicejungle.com/wp/files/2021/04/All-about-paprika.jpg',
      precio: 400
    },
    {
      nombre: 'Pimienta',
      calorias: 3,
      imagen: 'https://migranero.com/cdn/shop/products/pimientanegramolidamigranero.jpg?v=1564761423',
      precio: 400
    },
  ];
  vegetales =[
    {
      nombre: 'Tomate Cherry',
      calorias: 15,
      imagen: 'https://mercadobecampo.com/cdn/shop/products/tomatecherry.jpg?v=1618028752',
      precio: 800
    },
    {
      nombre: 'Pimentos',
      calorias: 18,
      imagen: 'https://www.sistemashorticolasalmeria.com/blog/wp-content/uploads/2023/06/Pimiento-dulce.webp',
      precio: 800
    },
    {
      nombre: 'Cebolla',
      calorias: 21,
      imagen: 'https://us-central1-yema-cdn.cloudfunctions.net/cdn/api/v1/yema-plm/images/view/productImage/cebolla-morada_23d5cd4d-218f-4401-be55-c82f997716c2=fjpg-q80-tcrop-w688',
      precio: 800
    },
    {
      nombre: 'Aceitunas',
      calorias: 66,
      imagen: 'https://images.pexels.com/photos/12474258/pexels-photo-12474258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      precio: 800
    },
  ];
  toppings =[
    {
      nombre: 'Champinones',
      calorias: 22,
      imagen: 'https://content.cuerpomente.com/medio/2021/04/28/recetas-rapidas-con-champinones-laminados_806fca6b_1200x1200.jpg',
      precio: 1800
    },
    {
      nombre: 'Peperoni',
      calorias: 75,
      imagen: 'https://assets.bonappetit.com/photos/615ef45230a120edc42ad1e8/1:1/w_1202,h_1202,c_limit/Pepperoni.jpg',
      precio: 1800
    },
    {
      nombre: 'Tocino',
      calorias: 122,
      imagen: 'https://carnesfriasmega.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTY3NzIwNywicHVyIjoiYmxvYl9pZCJ9fQ==--56a5ab840b4eb45e82f2e7794ca191c43630b359/tocineta_picada.png?locale=es',
      precio: 1800
    },
    {
      nombre: 'Jamon',
      calorias: 110,
      imagen: 'https://foodtofly.aena.es/medias/15004406.png?context=bWFzdGVyfGltYWdlc3wxMjk2Njc0fGltYWdlL3BuZ3xhREV5TDJnMlppODVNamc0TWpjMU5qVTJOek0wTHpFMU1EQTBOREEyTG5CdVp3fDg4ZjIyNTE2N2JiNDk4OWIyNDI0MDNkMzM1ODgzMmVmNTlkMjA4MGIwMGRjODNkMWExYjU3OGNiZGMwMDhmZTY',
      precio: 1800
    },
  ]

  // Ingredientes seleccionados
  seleccionados: any[] = [];

  // Total de calorías
  totalCalorias: number = 0;
  // Variable para sumar los precios y calcular el precio total
  totalPrecio: number = 0;
  // Progreso de la barra
  progreso: number = 0;

  nombre: string = ''
  /**
   * Selecciona o deselecciona un ingrediente
   * @param ingrediente Objeto que representa el ingrediente seleccionado
   */
  seleccionarIngrediente(ingrediente: any): void {
    console.log('Ingrediente seleccionado:', ingrediente);
    const index = this.seleccionados.findIndex(i => i.nombre === ingrediente.nombre);
    if (index === -1) {
      // Si no está en la lista, agregarlo
      this.seleccionados.push(ingrediente);
    } else {
      // Si ya está en la lista, eliminarlo
      this.seleccionados.splice(index, 1);
    }
    // Actualizar el total de calorías
    this.calcularTotalCalorias();
    // Actualizar el total del precio de la pizza
    this.CalcularPrecio();
    this.actualizarProgreso(); // Actualizar el progreso
  }
  /**
   * Calcula el total de calorías de los ingredientes seleccionados
   */
  calcularTotalCalorias(): void {
    this.totalCalorias = this.seleccionados.reduce((total, ingrediente) => total + ingrediente.calorias, 0);
    console.log('Calorías totales:', this.totalCalorias);
  }
  
  CalcularPrecio(): void {
    this.totalPrecio = this.seleccionados.reduce((total, ingrediente) => total + ingrediente.precio, 0);
    console.log('Precio total:', this.totalPrecio)
  }

  enviar() {
    console.log(this.nombre); // Obtiene el valor del input
  }

  /**
   * Actualiza el progreso basado en el número de ingredientes seleccionados
   */
  actualizarProgreso(): void {
    const totalCategorias = 6; // Número total de categorías (masa, queso, carne, especias, vegetales, toppings)
    const seleccionadas = [
      this.ingredientes,
      this.quesos,
      this.carnes,
      this.especias,
      this.vegetales,
      this.toppings,
    ].filter(categoria => categoria.some(ingrediente => this.seleccionados.includes(ingrediente))).length;

    this.progreso = Math.round((seleccionadas / totalCategorias) * 100);
    console.log('Progreso:', this.progreso);
  }
}

