export default themeConfig;
/** @ngInject */
function themeConfig($mdThemingProvider: angular.material.IThemingProvider) {

    /**  Dealersocket Palettes currently referencing WIDMORE UX Pattern Library */
    /**  http://widmore.dealersocketux.com/#/styles */

    // Primary
    $mdThemingProvider.definePalette('primary', {
        '50': 'F2FBFF',
        '100': 'C3DAE8',    // Border Blue
        '200': '8CD3FA',
        '300': '5CB2E0',
        '400': '3E97C7',    // Highlight Blue
        '500': '1D86B8',    // Primary Blue
        '600': '137BAB',
        '700': '096F9E',
        '800': '136A99',    // Shadow Blue
        '900': '26648B',    // Dark Blue
        'A100': 'E0F5FE',   // Hover Light Blue
        'A200': '199AD1',   // Hover Blue
        'A400': '1875A1',   // Hover Nav Blue
        'A700': '1875A1',   // Hover Nav Blue
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', // hues which contrast should be 'dark' by default
            '200', '300', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    // Secondary
    $mdThemingProvider.definePalette('secondary', {
        '50': 'A6EDAB',
        '100': '70E078',
        '200': '46E050',
        '300': '29CF34',
        '400': '00B40C',    // Hover Green
        '500': '009F0B',    // Primary Green
        '600': '00910A',
        '700': '008509',
        '800': '007808',
        '900': '006B07',
        'A100': '76E8A0',
        'A200': '4AB471',   // Complete
        'A400': '409C61',
        'A700': '409C61',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', 'A100'],
        'contrastLightColors': undefined
    });

    // Tertiary
    $mdThemingProvider.definePalette('tertiary', {
        '50': 'FFCE8A',
        '100': 'FFC370',
        '200': 'FAB85C',
        '300': 'F3AE4E',    // Open
        '400': 'F2A435',
        '500': 'F2991D',
        '600': 'ED8200',
        '700': 'D47300',    // Warning Text
        '800': 'BA6600',
        '900': 'A15800',
        'A100': 'FEF5CE',
        'A200': 'F2A435',
        'A400': 'A16720',
        'A700': 'A16720',
        'contrastDefaultColor': 'dark',
        'contrastDarkColors': undefined,
        'contrastLightColors': ['5  00', '600', '700', '800', '900', 'A200', 'A400', 'A700']
    });

    // Neutrals
    $mdThemingProvider.definePalette('neutrals', {
        '50': 'FFFFFF',     // White
        '100': 'FAFAFA',    // Hover Grey
        '200': 'F5F5F5',    // Primary Grey
        '300': 'EAEAEA',    // Darker Grey
        '400': 'DDDDDD',    // Border Grey
        '500': 'C7C7C7',    // Inactive
        '600': 'ADADAD',    // Text Inactive
        '700': '898989',    // Text Light
        '800': '333333',    // Text Dark
        '900': '2D2D2D',    // Highlight Black
        'A100': 'EBEBEB',
        'A200': '4B4B4B',   // Hover Black
        'A400': '141617',   // Shadow Black
        'A700': '000000',   // Black
        'contrastDefaultColor': 'dark',
        'contrastDarkColors': undefined,
        'contrastLightColors': ['700', '800', '900', 'A200', 'A400', 'A700']
    });

    // Danger
    $mdThemingProvider.definePalette('danger', {
        '50': 'FFEBEE',
        '100': 'FFCDD2',
        '200': 'EF9A9A',
        '300': 'E57373',
        '400': 'EF5350',
        '500': 'F44336',
        '600': 'E53935',
        '700': 'D32F2F',
        '800': 'C62828',
        '900': 'B71C1C',
        'A100': 'CF5C60', // OVERDUE
        'A200': 'EB0C0C', // DANGER
        'A400': 'FF1744',
        'A700': 'D50000',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300'],
        'contrastLightColors': undefined
    });

    /**  Dealersocket theming */
    /**  http://widmore.dealersocketux.com/#/styles */

    $mdThemingProvider.theme('default')
        .primaryPalette('primary', {
            'default': '500',   // Primary Blue
            'hue-1': '300',     //
            'hue-2': '400',     // Highlight Blue
            'hue-3': '900'      // Dark Blue
        })
        .accentPalette('secondary', {
            'default': '500',   // Primary Green
            'hue-1': '400',     // Hover Green
            'hue-2': 'A200',    // Complete
            'hue-3': '900'      // Dark green
        })
        .warnPalette('tertiary', {
            'default': '500',   // Primary Orange
            'hue-1': '300',     // Open
            'hue-2': '700',     // Warning Text
            'hue-3': '900'      // Dark Orange
        });

    $mdThemingProvider.theme('dangerNeutrals')
        .primaryPalette('neutrals', {
            'default': '200',   // Primary Grey
            'hue-1': 'A700',    // Black
            'hue-2': '700',     // Text Light
            'hue-3': '800'      // Text Dark
        })
        .warnPalette('danger', {
            'default': '500',
            'hue-1': 'A100',    // OverDue
            'hue-2': 'A200',    // Danger
            'hue-3': '900'
        })
        .backgroundPalette('neutrals', {
            'default': '200',   // Primary Grey
            'hue-1': 'A700',    // Black
            'hue-2': '700',     // Text Light
            'hue-3': '800'      // Text Dark
        });
}
