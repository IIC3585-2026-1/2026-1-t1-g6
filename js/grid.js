document.addEventListener('DOMContentLoaded', () => {
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

  const selectTarget = document.getElementById('target-box');
  const selectSpanCols = document.getElementById('span-cols');
  const selectSpanRows = document.getElementById('span-rows');
  const btnReset = document.getElementById('reset-boxes');

  if (selectTarget && selectSpanCols && selectSpanRows) {
    
    const boxStates = {
      1: { col: '1', row: '1' },
      2: { col: '1', row: '1' },
      3: { col: '1', row: '1' },
      4: { col: '1', row: '1' },
      5: { col: '1', row: '1' },
      6: { col: '1', row: '1' }
    };

    function aplicarEstiloCaja(id) {
      const caja = document.getElementById(`grid-box-${id}`);
      const estado = boxStates[id];
      
      caja.style.gridColumn = `span ${estado.col}`;
      caja.style.gridRow = `span ${estado.row}`;
      
      if (estado.col !== '1' || estado.row !== '1') {
        caja.classList.add('caja-modificada');
      } else {
        caja.classList.remove('caja-modificada');
      }
    }

    selectTarget.addEventListener('change', () => {
      const idActual = selectTarget.value;
      selectSpanCols.value = boxStates[idActual].col;
      selectSpanRows.value = boxStates[idActual].row;
    });

    selectSpanCols.addEventListener('change', () => {
      const idActual = selectTarget.value;
      boxStates[idActual].col = selectSpanCols.value;
      aplicarEstiloCaja(idActual);
    });

    selectSpanRows.addEventListener('change', () => {
      const idActual = selectTarget.value;
      boxStates[idActual].row = selectSpanRows.value;
      aplicarEstiloCaja(idActual);
    });

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        for (let i = 1; i <= 6; i++) {
          boxStates[i] = { col: '1', row: '1' };
          aplicarEstiloCaja(i);
        }
        selectSpanCols.value = '1';
        selectSpanRows.value = '1';
      });
    }
  }
});