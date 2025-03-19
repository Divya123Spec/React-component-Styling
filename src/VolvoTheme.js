import React from 'react';
import Grid from '@mui/material/Grid';
import "@volvo/vcdk/themes/all-semantic.css"; // Import all brands and modes
import { VcdkElement } from "@volvo/vcdk/vcdk-element";
import "@volvo/vcdk/themes/all-semantic.css"; // Import all themes
import "@volvo/vcdk/themes/volvo/semantic-light.css";
import "@volvo/vcdk/themes/volvo/semantic-dark.css";
import "./VolvoTheme.css"

VcdkElement.defaultTheme = "renault-light";

const VolvoTheme = () => {
    return (
        <div style={{ margin: '12px', padding: '12px' }}>
            <div style={{ marginBottom: '16px' }}>
                <vcdk-typography variant="heading2">
                    Welcome to the Volvo Theme Component
                </vcdk-typography>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <vcdk-typography variant="heading4">
                    These are few examples for theming
                </vcdk-typography>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4} style={{ marginBottom: '16px' }}>
                    <div style={{ width: "100%" }}>
                        <vcdk-search-field type="search" aria-label="Search" placeholder="Search">
                            <vcdk-search-option iconstart="pdf-document">
                                Test
                            </vcdk-search-option>
                            <vcdk-search-option iconstart="search">
                                Test 2
                            </vcdk-search-option>
                            <vcdk-search-option iconstart="search">
                                Test 3
                            </vcdk-search-option>
                            <vcdk-icon-button arialabel="Clear Input" slot="clear-icon" icon="close"></vcdk-icon-button>
                        </vcdk-search-field>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} style={{ marginBottom: '16px' }}>
                    <vcdk-theme-provider class="sb-unstyled" style={{ "--sb-brand-volvo": "", "--sb-brand-renault": "none", "--sb-brand-mack": "none" }} themeid="volvo-light">
                        <vcdk-switch label="Label"></vcdk-switch>
                    </vcdk-theme-provider>
                </Grid>
                <Grid item xs={12} md={4} style={{ marginBottom: '16px' }}>
                    <vcdk-text-field autocapitalize="none" placeholder="Input text"input-aria-label="Label" value="" type="text" size="medium" label="Label" helpertext="Read-only helper text" rows="0" icon="" maxlength="140"></vcdk-text-field>
                </Grid>

                <Grid item xs={12} md={6} style={{ marginBottom: '16px' }}>
                    <vcdk-card className="card" flexdirection="column" invert-theme="true">
                        <vcdk-image loading="lazy" alt="" aspect-ratio="3/2" src="https://developer.designsystem.volvogroup.com/assets/volvo-02-DEDLr-_Z.jpg"></vcdk-image>
                        <vcdk-card-content>
                            <vcdk-typography variant="caption2" style={{ marginBottom: "4px" }}>
                                Volvo 9800
                            </vcdk-typography>
                            <vcdk-typography variant="heading3" style={{ marginBottom: "16px" }}>
                                Your hard-working partner
                            </vcdk-typography>
                            <vcdk-typography>
                                The Volvo 8900 will meet all needs in intercity and commuting
                                operations. Highly versatile through a wide range of variants, yet
                                firmly focused on reducing operating costs. Our right-sized Euro 6
                                engine provides excellent performance and driveability – with low fuel
                                consumption.
                            </vcdk-typography>
                            <vcdk-card-actions>
                                <vcdk-button variant="tertiary" size="small">
                                    Specifications
                                </vcdk-button>
                                <vcdk-button variant="secondary" size="small">Order now</vcdk-button>
                            </vcdk-card-actions>
                        </vcdk-card-content>
                    </vcdk-card>
                </Grid>
            </Grid>
        </div>
    );
};

export default VolvoTheme;