import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const allProducts = [
        { id: 1, name: "Camiseta Roja", price: 20, description: "Camiseta de algodón", category: "hombres", image: "https://media.istockphoto.com/id/1391139338/es/foto/manos-en-las-caderas-hombre-mirando-a-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=ozCCWs5gu6zbLT_wY79EDAo_Cvpx1bLeOBo3-ZxhWCA=" },
        { id: 2, name: "Pantalón Azul", price: 40, description: "Pantalón de mezclilla", category: "hombres", image: "https://media.istockphoto.com/id/1203193452/es/foto/full-body-perfil-lado-foto-de-loco-hombre-alegre-saltar-tienen-descanso-relajarse-correr.jpg?s=612x612&w=0&k=20&c=JczlLVwr0hvabnx2vuHXP_EpeaLBUf62r5H3sSsYUJQ=" },
        { id: 3, name: "Zapatos Negros", price: 60, description: "Zapatos de cuero", category: "hombres", image: "https://media.istockphoto.com/id/172417586/es/foto/elegante-zapatos-de-cuero-negro.jpg?s=612x612&w=0&k=20&c=y0HIZ1DX6qnFfHOKH7KzIM2S6g8Wl1IO5pDy6LrjWoE=" },
        { id: 4, name: "Vestido Elegante", price: 80, description: "Vestido para ocasiones especiales", category: "mujeres", image: "https://media.istockphoto.com/id/1340877616/es/foto/dos-hermosas-mujeres-con-vestidos-de-noche-bailando-y-sonriendo.jpg?s=612x612&w=0&k=20&c=Eu3F0xcQUu7co0-Fp2M-nGK6CsImQ1PXQ6S7D0j3bus=" },
        { id: 5, name: "Blusa Blanca", price: 30, description: "Blusa casual", category: "mujeres", image: "https://media.istockphoto.com/id/990428384/es/foto/interesados-empresaria-con-maquillaje-moda-posando-sobre-fondo-gris-en-estudio-interior-foto-de.jpg?s=612x612&w=0&k=20&c=n0Pza0rso4-LGNhNhC1tOKWU8rCt0DJ-KFXs5Xs_pWc=" },
        { id: 6, name: "Pantalón Rojo", price: 50, description: "Pantalón de vestir", category: "mujeres", image: "https://media.istockphoto.com/id/925653842/es/foto/verano-en-zapatos-de-tac%C3%B3n-altos.jpg?s=612x612&w=0&k=20&c=mVO3cvSyaR_mQ0AZAbQvZ2kqjYcrLwgIPhipwwt38i4=" },
        { id: 7, name: "Camiseta Niño", price: 15, description: "Camiseta para niño", category: "ninos", image: "https://media.istockphoto.com/id/621589954/es/foto/ni%C3%B1a-de-pie-afuera-en-el-parque.jpg?s=612x612&w=0&k=20&c=7xBSHq13yp5JUBYBLnaEhDbakAVHP6qkNXtHICGRiY0=" },
        { id: 8, name: "Pantalón Niño", price: 25, description: "Pantalón para niño", category: "ninos", image: "https://media.istockphoto.com/id/537307742/es/foto/ni%C3%B1os-lindo-elegante.jpg?s=612x612&w=0&k=20&c=OVvGvsjoqN-Gy8uXhWfAQH31QcfoAt22yLzXsuNVUnM=" },
        { id: 9, name: "Campera Niño", price: 35, description: "Campera de abrigo", category: "ninos", image: "https://media.istockphoto.com/id/521367859/es/foto/childrens-clothing-store-en-un-flea-market.jpg?s=612x612&w=0&k=20&c=WxaZn7ZJeS4s-yWOsYcw51ZN_yOd5WC6o8eZcHWjZEc=" },
        { id: 10, name: "Camiseta Hombre", price: 20, description: "Camiseta casual de algodón", category: "hombres", image: "https://media.istockphoto.com/id/871566618/es/foto/retrato-de-un-hombre-americano-afro-muy-feliz.jpg?s=612x612&w=0&k=20&c=spdDX3l3SjSKBFmm6eSXpJ7aNNLeLkfcNNR10gbrP4o=" },
        { id: 11, name: "Falda Mujer", price: 40, description: "Falda elegante para el día a día", category: "mujeres", image: "https://media.istockphoto.com/id/509995950/es/foto/mujer-usando-zapatos-de-tac%C3%B3n-color-carne.jpg?s=612x612&w=0&k=20&c=M0LqQ-0T96A4RZ0qrXFpM4roiTzer9IZYxhnrMbizH0=" },
        { id: 12, name: "Zapatos Niño", price: 30, description: "Zapatos cómodos y resistentes", category: "ninos", image: "https://media.istockphoto.com/id/1174148326/es/foto/compras-de-zapatos.jpg?s=612x612&w=0&k=20&c=ToFaZN9VeYLscDUWcN-vYdoECiARZVNDqpWFP1Uv_ig=" },
    ];

    const foundProduct = allProducts.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Cargando detalle del producto...</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h1>{product.name}</h1>
        <span><strong>Precio:</strong> ${product.price}</span>
        <span><strong>Descripción:</strong> {product.description}</span>
        <span><strong>Categoría:</strong> {product.category}</span>
      </div>
    </div>
  );
};

export default ItemDetailContainer;