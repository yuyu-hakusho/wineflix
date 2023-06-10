import React from 'react';
import WineCategory from './WineCategory';

export default function DrinkStatus() {
    //const categories = ['Drink Again','Keep Drinking'];
    //can I make the cateogry title a reusable component? How?

    const wines = [{
        id: 1,
        imageUrl: '/red-wine.jpg',
        isNew: true,
        label: 'Wine',
        isFinished: true,
      }, {
        id: 2,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 3,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isNew: true,
        isFinished: true,
      }, {
        id: 4,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 5,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isNew: true,
        isFinished: true,
      }, {
        id: 6,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 7,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 8,
        imageUrl: '/red-wine.jpg',
        label: 'Wine',
        isFinished: true,
      }, {
        id: 1,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 2,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 3,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 4,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 5,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 6,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 7,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }, {
        id: 8,
        imageUrl: '/red-wine.jpg',
        progress: 22,
        label: 'Wine',
      }];

    return (<WineCategory wines={ wines }/>);
}