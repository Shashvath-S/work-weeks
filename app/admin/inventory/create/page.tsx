"use client";

import AdminTopTitle from "@/app/components/AdminTopTitle";
import { FormEvent, useState } from "react";

export default function App() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantityInStock, setQuantityInStock] = useState("");
  const [reorderLevel, setReorderLevel] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [supplier, setSupplier] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/inventory/create", {
      method: "POST",
      body: JSON.stringify({
        itemName,
        category,
        quantityInStock,
        reorderLevel,
        unitPrice,
        supplier,
      }),
    });
  };

  return (
    <div style={{ padding: "20px", width: "100%", height: "95vh" }}>
      <AdminTopTitle title="Inventory" link="view" />
      <form className="inventoryForm" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">
            Item Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Enter item name"
            aria-describedby="itemNameHelp"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="category"
            placeholder="Enter category"
            aria-describedby="categoryHelp"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantityInStock" className="form-label">
            Quantity In Stock
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="quantityInStock"
            placeholder="Enter quantity"
            aria-describedby="quantityInStockHelp"
            value={quantityInStock}
            onChange={(e) => setQuantityInStock(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reorderLevel" className="form-label">
            Reorder Level
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="reorderLevel"
            placeholder="Enter reorder level"
            aria-describedby="reorderLevelHelp"
            value={reorderLevel}
            onChange={(e) => setReorderLevel(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="unitPrice" className="form-label">
            Unit Price
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="unitPrice"
            placeholder="Enter unit price"
            aria-describedby="unitPriceHelp"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="supplierID" className="form-label">
            Supplier
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="supplierID"
            placeholder="Enter supplier"
            aria-describedby="supplierIDHelp"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
