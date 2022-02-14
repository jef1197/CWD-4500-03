wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'center-text',
    label: 'Center',
} );

wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'center-text',
    label: 'Center',
} );

wp.domReady( function () {
    wp.blocks.unregisterBlockStyle( 'core/quote', 'large' );
    wp.blocks.unregisterBlockStyle( 'core/quote', 'plain' );
} );