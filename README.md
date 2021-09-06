# Calculadora de resistencia

## Descripcion

El proyecto consiste en hacer una interfaz interactiva donde puedes saber el valor de una resistencia con los colores en sus bandas, para cambiar de color individual de cada banda, solo basta con hacer click en su parte superior o inferior.

## Restricciones

Solo se hace interes en el JavaScript.

No fue necesario el responsive

No se necesito de aplicar estrictamente un HTML correcto.

Para recorrer las bandas se clickea, en superior para valores mas bajos como 1, 2, 3, etc. Inferior para valores mas altos como 8, 9, 10, etc.

Se necesita un texto variable para visualizar el valor de la resistencia y sus colores.

## Temas aplicados a destacar

- Manipulacion del DOM.
- Clousure
- Event Delegation

### Aplicando  Closoure

Para entender porque se aplico clousure primero hay que exponer la situacion, en este caso se tienen multiples bandas, pero cada una de ellas se manipula individualmente, ya se dijo antes que los clicks detonan eso, pero a su vez la posicion del click decide si va a ser un color posterior o anterior, entonces para eso debemos tener una variable que indique nuestra posicion.

Pero tener muchas variables espuestas puede generar mucho codigo, ademas esta variable que controla la posicion solamente es necesaria cuando se quiere modificar la banda en especifico, otro asunto podria ser un poco de seguridad, ya que creandole un ambiente lexico mas local, evitamos una manipulacion no deseada.

```javascript

// Aqui estamos aplicando clousure esta funcion lo que hara es retornar otra funcion pero
// La funcion que se retorna tendra 4 varaibles, 3 son valores enteros y la restante es
// un array que contiene todos los colores posibles de tal banda.
// Como parametros recibimos la posicion del primero color, la posicion del ultimo color
//y todos los colores posibles
const generateBand = (first, last, colors) => {

    // Esta constante contiene un array con todos los colores posibles, cada valor 
    // de este array tiene un array que contiene el color y el valor numerico del 
    // respectivo color 
    const allColors = colors;
    // Posicion del primer color
    let firstColor = first;
    // Posicion del segundo color
    let lastColor = last;
    // Posicion actual de la banda que  nos ayuda a determinar el color
    // y el valor de esta misma, por conveniencia todas las bandas emepzaran
    // en su primer color o sea posicion 0
    let bandPosition = 0;

    // Se retorna una funcion la cual tiene un parametro que reconoce la coordenada
    // vertical o Y, de la banda
    const changeBandColor = (positionClicked) => {

        // Las pantallas tienen como punto origen la parte superior izquierda, por lo que
        // entre mas arriba se tiende a restar.
        // Cada banda tiene 250px de alto
        // El limite superior vale 0px y la inferior 250px
        
        if (positionClicked >= 125 && bandPosition < lastColor ) {
            // Si positionClicked mayor que 125px en vertical entonces se da entendido que
            // se hizo click en la parte inferior
            // Y si ademas nuestra posicion actual es menor al del ultimo color
            // entonces nuestra position sube al siguiente color
            bandPosition = bandPosition + 1;

        } else if (positionClicked <= 125 && bandPosition > firstColor ) {
            // Si positionClicked menor que 125px en vertical entonces se da entendido que
            // se hizo click en la parte superior
            // Y si ademas nuestra posicion actual es mayor al del primer color
            // entonces nuestra position baja al color anterior
            bandPosition -= 1;
        }
        
        // creamos dos constante que extraen el color y valor numerico de
        // la lista de colores que solo se pueden acceder mediante esta funcion.
        const color = allColors[bandPosition][0];
        const value = allColors[bandPosition][1];
        // retornamos para los datos necesarios
        // cabe mencionar que esto solo se encarga de la logica, lo visual aun no se modifica
        // esa responsabilidad de delega en otra parte.
        return [color, value];
    }
    return changeBandColor;
};
```