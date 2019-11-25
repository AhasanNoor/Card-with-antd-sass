import React from 'react';
import { Card } from 'antd';
import './Card.scss';

const { Meta } = Card;

export default function CustomCard({image}) {
    return (
        <div className="card">
            <Card
                hoverable
                className="card__body"
                cover={<img alt="example" className="card__img" src={image} />}
            >
                <Meta title="Europe Street beat" className="card__meta" description="www.instagram.com" />
                <p className="card__paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores rem autem maxime similique ducimus, modi totam temporibus facilis ab? Itaque magni eligendi, inventore in esse repellat doloribus fugit nisi.</p>
            </Card>
        </div>
    )
}
