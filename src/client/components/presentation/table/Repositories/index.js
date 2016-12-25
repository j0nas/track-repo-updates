import React from "react";
import "./style.css";

export default ({items}) =>
    <table className="repositories-table">
        <thead>
        <tr>
            <th>img</th>
            <th>repository name</th>
            <th>stargazers</th>
        </tr>
        </thead>
        <tbody>
        {items.map((res, index) =>
            <tr key={index}>
                <td>
                    <img src={res.owner.avatar_url} width={15} height={15}/>
                </td>
                <td>
                    <a href={res.url}>{res.full_name}</a>
                </td>
                <td>{res.stargazers_count}</td>
            </tr>
        )}
        </tbody>
    </table>;