document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DEL CONTENEDOR GRID ---
  const gridZone = document.getElementById('grid-zone');
  const selectCols = document.getElementById('grid-cols');
  const selectRows = document.getElementById('grid-rows');
  const selectGap = document.getElementById('grid-gap');

  if (gridZone && selectCols && selectRows && selectGap) {
    function updateGridContainer() {
      gridZone.style.setProperty('--current-cols', selectCols.value);
      gridZone.style.setProperty('--current-rows', selectRows.value);
      gridZone.style.setProperty('--current-gap', selectGap.value);
    }

    selectCols.addEventListener('change', updateGridContainer);
    selectRows.addEventListener('change', updateGridContainer);
    selectGap.addEventListener('change', updateGridContainer);
  }

  // --- LÓGICA DINÁMICA DE ELEMENTOS HIJOS CON MEMORIA ---
  const selectTarget = document.getElementById('target-box');
  const selectSpanCols = document.getElementById('span-cols');
  const selectSpanRows = document.getElementById('span-rows');
  const btnReset = document.getElementById('reset-boxes');

  if (selectTarget && selectSpanCols && selectSpanRows) {
    
    // 1. CREAMOS LA MEMORIA (El estado de las 6 cajas)
    const estadoCajas = {
      1: { col: '1', row: '1' },
      2: { col: '1', row: '1' },
      3: { col: '1', row: '1' },
      4: { col: '1', row: '1' },
      5: { col: '1', row: '1' },
      6: { col: '1', row: '1' }
    };

    // Función que aplica visualmente los estilos guardados en la memoria
    function aplicarEstiloCaja(id) {
      const caja = document.getElementById(`grid-box-${id}`);
      const estado = estadoCajas[id];
      
      caja.style.gridColumn = `span ${estado.col}`;
      caja.style.gridRow = `span ${estado.row}`;
      
      // Si la caja está modificada, le ponemos la clase para destacarla
      if (estado.col !== '1' || estado.row !== '1') {
        caja.classList.add('caja-modificada');
      } else {
        caja.classList.remove('caja-modificada');
      }
    }

    // 2. AL CAMBIAR DE CAJA EN EL MENÚ: Actualizamos los selectores para mostrar sus valores guardados
    selectTarget.addEventListener('change', () => {
      const idActual = selectTarget.value;
      selectSpanCols.value = estadoCajas[idActual].col;
      selectSpanRows.value = estadoCajas[idActual].row;
    });

    // 3. AL CAMBIAR EL ANCHO: Guardamos en memoria y aplicamos
    selectSpanCols.addEventListener('change', () => {
      const idActual = selectTarget.value;
      estadoCajas[idActual].col = selectSpanCols.value;
      aplicarEstiloCaja(idActual);
    });

    // 4. AL CAMBIAR EL ALTO: Guardamos en memoria y aplicamos
    selectSpanRows.addEventListener('change', () => {
      const idActual = selectTarget.value;
      estadoCajas[idActual].row = selectSpanRows.value;
      aplicarEstiloCaja(idActual);
    });

    // 5. BOTÓN DE RESTAURAR: Limpia la memoria y la pantalla
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        for (let i = 1; i <= 6; i++) {
          estadoCajas[i] = { col: '1', row: '1' };
          aplicarEstiloCaja(i);
        }
        // Reiniciamos también los menús desplegables a su valor por defecto
        selectSpanCols.value = '1';
        selectSpanRows.value = '1';
      });
    }
  }
});