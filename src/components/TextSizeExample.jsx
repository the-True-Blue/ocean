import React from "react";

const TextSizeExample = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="font-poppins text-lg font-semibold mb-4">
        Ejemplos de tamaños de texto
      </h2>

      {/* Ejemplo de uso básico */}
      <div className="border p-4 rounded">
        <h3 className="font-medium mb-2">Uso básico:</h3>
        <span className="text-6px">Texto de 6 píxeles</span>
        <span className="text-7px">Texto de 7 píxeles</span>
        <span className="text-8px">Texto de 8 píxeles</span>
        <span className="text-9px">Texto de 9 píxeles</span>
        <span className="text-10px">Texto de 10 píxeles</span>
        <span className="text-11px">Texto de 11 píxeles</span>
      </div>

      {/* Ejemplo con alineación de texto */}
      <div className="border p-4 rounded grid grid-cols-3 gap-4">
        <div>
          <h3 className="font-medium mb-2">Alineado a la izquierda:</h3>
          <p className="text-left text-8px">Texto de 8px</p>
          <p className="text-left text-6px">Texto de 6px</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Centrado:</h3>
          <p className="text-center">
            <span className="text-8px">Texto de 8px</span>
          </p>
          <p className="text-center">
            <span className="text-6px">Texto de 6px</span>
          </p>
        </div>

        <div>
          <h3 className="font-medium text-11px mb-2">Alineado a la derecha:</h3>
          <p className="text-right text-6px">
            <span className="">Texto de 8px</span>
          </p>
          <p className="text-right">
            <span className="text-6px">Texto de 6px</span>
          </p>
        </div>
      </div>

      {/* Ejemplo con diferentes fuentes */}
      <div className="border p-4 rounded">
        <h3 className="font-medium mb-2">Con diferentes fuentes:</h3>
        <p className="font-spartan text-11px">League Spartan 8px</p>
        <p className="font-orbitron text-10px">Orbitron 8px</p>
        <p className="font-poppins text-9px">Poppins 8px</p>
        <p className="font-aldrich text-8px">Aldrich 8px</p>
        <p className="font-rajdhani text-7px">Rajdhani 7px</p>
        <p className="font-inter text-6px">Inter 6px</p>
      </div>

      {/* Ejemplo con colores y estilos adicionales */}
      <div className="border p-4 rounded">
        <h3 className="font-medium mb-2">Con estilos adicionales:</h3>
        <p className="text-8px text-dark-blue font-bold">
          Texto azul oscuro en negrita (8px)
        </p>
        <p className="text-7px text-light-blue">Texto azul claro (7px)</p>
        <p className="text-6px font-semibold italic">
          Texto en cursiva seminegrita (6px)
        </p>
        <p
          className="text-9px"
          style={{ textShadow: "var(--text-shadow-blue)" }}
        >
          Texto con sombra (9px)
        </p>
      </div>
    </div>
  );
};

export default TextSizeExample;
