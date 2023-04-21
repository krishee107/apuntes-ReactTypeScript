export const TiposBasicos = () => {
    const nombre: string = 'Cristina';
    const edad: number = 26;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Invisibilidad'];

    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre} - {edad} - {estaActivo ? "Activo" : "No activo"}
            <br />
            {poderes.join(',')}
        </>
    )
}
