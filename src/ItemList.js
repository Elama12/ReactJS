import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from 'react-icons/fa'
import LineItem from './LineItem';

export default function ItemList({ items, handleCheck, handleDelete }) {
    return (
        <ui>
            {items.map((item) => (
                <LineItem
                    item={item}
                    key={item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ui>
    )
}
