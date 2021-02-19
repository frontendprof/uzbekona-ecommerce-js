
import data from "../data.js";

const HomeScreen={

    render:()=>{
        const {products}=data;

        return `
            <ul class="products">
                ${products.map(p=>`
                <li>
                    <div class="product">
                        <a href="/#/product/${p._id}">
                            <img src="${p.image}" alt="${p.name}">
                        </a>

                        <div class="product-name">
                            <a href="/#/product/${p._id}">${p.name}</a>
                        </div>

                        <div class="product-brand">
                            ${p.brand}
                        </div>

                        <div class="product-price">
                            $${p.price}
                        </div>
                    </div>
                </li>
                `).join('\n')}
            </ul>
        `
    }
}

export default HomeScreen;