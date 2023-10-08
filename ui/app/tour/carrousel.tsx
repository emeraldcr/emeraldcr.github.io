import * as React from 'react';
import ImageListComp from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function ImageList() {
    const itemData = [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                '/1.jpg',
        },
        {
            label: 'Bird',
            imgPath:
                '/2.jpg',
        },
        {
            label: 'Bali, Indonesia',
            imgPath:
                '/10.jpg',
        },
        {
            label: 'Goč, Serbia',
            imgPath:
                '/7.jpg',
        },
    ];
    return (
        <ImageListComp sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.label}>
                    <img
                        srcSet={`${item.imgPath}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.imgPath}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.label}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageListComp>
    );
}

export default ImageList;