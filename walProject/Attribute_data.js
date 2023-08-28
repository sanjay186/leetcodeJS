
export const AttributeData = 
{
  "key": "tires",
  "name": "Tires",
  "attributes": {
    "shortDescription": {
      "key": "product_short_description",
      "name": "Site Description",
      "xmlName": "shortDescription",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 4000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Site Description",
          "shortDescription"
        ]
      ],
      "rank": 1000,
      "dataType": "String",
      "definitions": "Overview of the key selling points of the item, marketing content, and highlights in paragraph form. For SEO purposes, repeat the product name and relevant keywords here.",
      "examples": "The George - Girls' Short Sleeve Polo Shirt will make a great addition to your daughter's uniform wardrobe. This short-sleeved girls' shirt has a flat knit collar and cuff for a comfortable fit. Plus, it's tagless, so your daughter's skin won't be irritated by a scratchy tag. This girls' short sleeve polo is made from a cotton blend, and treated with Scotchgard for stain protection. It has a two-button placket, an extended back hem and vents on each side hem. The girls' polo shirt is machine washable and very easy to maintain.",
      "dataDefinitions": "Alphanumeric, 4000 characters - Overview of the key selling points of the item, marketing content, and highlights in paragraph form. For SEO purposes, repeat the product name and relevant keywords here. Example: The George - Girls' Short Sleeve Polo Shirt will make a great addition to your daughter's uniform wardrobe. This short-sleeved girls' shirt has a flat knit collar and cuff for a comfortable fit. Plus, it's tagless, so your daughter's skin won't be irritated by a scratchy tag. This girls' short sleeve polo is made from a cotton blend, and treated with Scotchgard for stain protection. It has a two-button placket, an extended back hem and vents on each side hem. The girls' polo shirt is machine washable and very easy to maintain.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Basic Item Info",
      "uiHeader": "Item Content",
      "values": [
        "<p>Partial Upload</p>"
      ],
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
    },
    "tireSize": {
      "key": "tire_size",
      "name": "Tire Size",
      "xmlName": "tireSize",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 800,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Size",
          "tireSize"
        ]
      ],
      "rank": 2000,
      "dataType": "String",
      "definitions": "The tire industry's standardized sizing information for the tire.",
      "examples": "P225/50R16 91S; 225/50R16 92S",
      "dataDefinitions": "Alphanumeric, 800 characters - The tire industry's standardized sizing information for the tire. Example: P225/50R16 91S; 225/50R16 92S",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "P245/35R18 92Y"
      ],
      "owner": true
    },
    "mainImageUrl": {
      "key": "main_image",
      "name": "Main Image URL",
      "xmlName": "mainImageUrl",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 2000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Main Image URL",
          "mainImageUrl"
        ]
      ],
      "rank": 3000,
      "dataType": "URL",
      "definitions": "Main image of the item. File Format: JPEG (.jpg). Recommended Pixel Dimensions: 2200px x 2200px. Minimum Pixel Dimensions for Zoom 1500px x 1500px. Swatch Pixel Dimensions: 50px x 50px. Resolution: 300 ppi. Maximum file size: 5MB. Aspect Ratio: 1:1 (Square). Recommended File Naming: GTIN-14 digit\nImage URLs should end in an image file type (.jpg) to follow best practices. They must link to a public image file that loads as an image",
      "dataDefinitions": "URL, 2000 characters - Main image of the item. File Format: JPEG (.jpg). Recommended Pixel Dimensions: 2200px x 2200px. Minimum Pixel Dimensions for Zoom 1500px x 1500px. Swatch Pixel Dimensions: 50px x 50px. Resolution: 300 ppi. Maximum file size: 5MB. Aspect Ratio: 1:1 (Square). Recommended File Naming: GTIN-14 digit\nImage URLs should end in an image file type (.jpg) to follow best practices. They must link to a public image file that loads as an image",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Images",
      "uiHeader": "Imagery & Media",
      "values": [
        "https://i5-qa.walmartimages.com/asr/2477a856-5399-4e3e-9f83-e3ddbfb63fb6.0fafa5c70068b24a8e1e6aad0f279d0c.jpeg"
      ],
      "owner": true
    },
    "prop65WarningText": {
      "key": "prop_65_warning_text",
      "name": "California Prop 65 Warning Text",
      "xmlName": "prop65WarningText",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 5000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "California Prop 65 Warning Text",
          "prop65WarningText"
        ]
      ],
      "rank": 4000,
      "dataType": "String",
      "definitions": "This is a particular statement legally required by the State of California for certain products to warn consumers about potential health dangers. See the portions of the California Health and Safety Code related to Proposition 65 to see what products require labels and to verify the text of your warning label. If no warning please enter the value,\"None\".",
      "examples": "For example purposes only:  WARNING: This product contains chemicals known to the State of California to cause cancer and birth defects or other reproductive har",
      "dataDefinitions": "Alphanumeric, 5000 characters - This is a particular statement legally required by the State of California for certain products to warn consumers about potential health dangers. See the portions of the California Health and Safety Code related to Proposition 65 to see what products require labels and to verify the text of your warning label. If no warning please enter the value,\"None\". Example: For example purposes only:  WARNING: This product contains chemicals known to the State of California to cause cancer and birth defects or other reproductive har",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Compliance & Regulatory",
      "uiHeader": "Item Content",
      "values": [
        "no Prob 65 warning needed"
      ],
      "owner": true
    },
    "productSecondaryImageURL": {
      "key": "product_secondary_image_url",
      "name": "Additional Image URL",
      "xmlName": "productSecondaryImageURL",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "Y",
      "minDataLength": 1,
      "maxDataLength": 2000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Additional Image URL",
          "productSecondaryImageURL"
        ]
      ],
      "rank": 5000,
      "dataType": "URL",
      "columnCount": 4,
      "definitions": "Secondary images of the item. File Format: JPEG (.jpg). Recommended Pixel Dimensions: 2200px x 2200px. Minimum Pixel Dimensions for Zoom 1500px x 1500px. Swatch Pixel Dimensions: 50px x 50px. Resolution: 300 ppi. Maximum file size: 5MB. Aspect Ratio: 1:1 (Square). Recommended File Naming: GTIN-14 digit\nImage URLs should end in an image file type (.jpg) to follow best practices. They must link to a public image file that loads as an image",
      "dataDefinitions": "URL, 2000 characters - Secondary images of the item. File Format: JPEG (.jpg). Recommended Pixel Dimensions: 2200px x 2200px. Minimum Pixel Dimensions for Zoom 1500px x 1500px. Swatch Pixel Dimensions: 50px x 50px. Resolution: 300 ppi. Maximum file size: 5MB. Aspect Ratio: 1:1 (Square). Recommended File Naming: GTIN-14 digit\nImage URLs should end in an image file type (.jpg) to follow best practices. They must link to a public image file that loads as an image",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Images",
      "uiHeader": "Imagery & Media",
      "values": [
        "https://i5-qa.walmartimages.com/asr/c8a192f5-34b4-44b0-bd2d-9f826cabf8d9.004fdf0a66b676a7911a7b118c605998.png",
        "https://i5-qa.walmartimages.com/asr/7262da07-592f-4a2d-b64e-7cbeb1821c43.29fc420d4eaeae40112e20e4eced5123.png",
        "https://i5-qa.walmartimages.com/asr/9c4eb1de-fd02-4489-a14a-bfeb87a96f13.57567609ec49b103d7eee2dddf57f9c2.jpeg"
      ],
      "owner": true
    },
    "keyFeatures": {
      "key": "product_long_description",
      "name": "Key Features",
      "xmlName": "keyFeatures",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "Y",
      "minDataLength": 1,
      "maxDataLength": 4000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Key Features",
          "keyFeatures"
        ]
      ],
      "rank": 6000,
      "dataType": "String",
      "columnCount": 3,
      "definitions": "Recommended to use short, 200 character key features which will appear as bulleted text on the item page and in search results. Key features help the user understand the benefits of the product with a simple and clean format. We highly recommended using three or more key features.",
      "examples": "Wicks away moisture; Looks fabulous with wedge heels; Won't shrink in wash",
      "dataDefinitions": "Alphanumeric, 4000 characters - Recommended to use short, 200 character key features which will appear as bulleted text on the item page and in search results. Key features help the user understand the benefits of the product with a simple and clean format. We highly recommended using three or more key features. Example: Wicks away moisture; Looks fabulous with wedge heels; Won't shrink in wash",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Basic Item Info",
      "uiHeader": "Item Content",
      "values": [
        "<ul><li>lowest price guarantee!</li><li>smooth ride</li><li>must have for every vehicle</li></ul>"
      ],
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
    },
    "msrp": {
      "key": "manufacturer_suggested_retail_price",
      "name": "MSRP",
      "xmlName": "msrp",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 8,
      "precision": "2",
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "MSRP",
          "msrp"
        ]
      ],
      "rank": 7000,
      "dataType": "Decimal",
      "definitions": "Manufacturer's suggested retail price. This is not the price that Walmart customers will pay for your product. You can use up to 8 digits before the decimal place. Do not use commas or dollar signs.",
      "examples": "19.95",
      "dataDefinitions": "Decimal, 8 characters - Manufacturer's suggested retail price. This is not the price that Walmart customers will pay for your product. You can use up to 8 digits before the decimal place. Do not use commas or dollar signs. Example: 19.95",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Offer",
      "uiHeader": "Item Content",
      "owner": true
    },
    "manufacturer": {
      "key": "manufacturer",
      "name": "Manufacturer Name",
      "xmlName": "manufacturer",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 60,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Manufacturer Name",
          "manufacturer"
        ]
      ],
      "rank": 8000,
      "dataType": "String",
      "definitions": "The name of the manufacturer.",
      "examples": "Procter & Gamble; Apple; Sony; General Motors; Yamaha",
      "dataDefinitions": "Alphanumeric, 60 characters - The name of the manufacturer. Example: Procter & Gamble; Apple; Sony; General Motors; Yamaha",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "GoodYear"
      ],
      "owner": true
    },
    "manufacturerPartNumber": {
      "key": "manufacturer_part_number",
      "name": "Manufacturer Part Number",
      "xmlName": "manufacturerPartNumber",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 60,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Manufacturer Part Number",
          "manufacturerPartNumber"
        ]
      ],
      "rank": 9000,
      "dataType": "String",
      "definitions": "MPN uniquely identifies the product to its manufacturer. For many products this will be identical to the model number. Some manufacturers distinguish part number from model number. Having this information allows customers to search for items on the site and informs product matching.",
      "examples": "5061025; TSR-1002; 4-40-3/4-pan-phil",
      "dataDefinitions": "Alphanumeric, 60 characters - MPN uniquely identifies the product to its manufacturer. For many products this will be identical to the model number. Some manufacturers distinguish part number from model number. Having this information allows customers to search for items on the site and informs product matching. Example: 5061025; TSR-1002; 4-40-3/4-pan-phil",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "Goodyear 130"
      ],
      "owner": true
    },
    "modelNumber": {
      "key": "model",
      "name": "Model Number",
      "xmlName": "modelNumber",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 60,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Model Number",
          "modelNumber"
        ]
      ],
      "rank": 10000,
      "dataType": "String",
      "definitions": "Model numbers allow manufacturers to keep track of each hardware device and identify or replace the proper part when needed. Model numbers are often found on the bottom, back, or side of a product. Having this information allows customers to search for items on the site and informs product matching.",
      "examples": "G62-465DX; MFP00112BBQN",
      "dataDefinitions": "Alphanumeric, 60 characters - Model numbers allow manufacturers to keep track of each hardware device and identify or replace the proper part when needed. Model numbers are often found on the bottom, back, or side of a product. Having this information allows customers to search for items on the site and informs product matching. Example: G62-465DX; MFP00112BBQN",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "GY Model 23463"
      ],
      "owner": true
    },
    "countPerPack": {
      "key": "count_per_pack",
      "name": "Count Per Pack",
      "xmlName": "countPerPack",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 9,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Count Per Pack",
          "countPerPack"
        ]
      ],
      "rank": 11000,
      "dataType": "Integer",
      "definitions": "The number of identical items inside each individual package.",
      "examples": "3",
      "dataDefinitions": "Number, 9 characters - The number of identical items inside each individual package. Example: 3",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "count": {
      "key": "number_of_pieces",
      "name": "Total Count",
      "xmlName": "count",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 50,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Total Count",
          "count"
        ]
      ],
      "rank": 12000,
      "dataType": "String",
      "definitions": "The total number of identical items in the package.",
      "examples": "27",
      "dataDefinitions": "Alphanumeric, 50 characters - The total number of identical items in the package. Example: 27",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "tireWidth": {
      "key": "tire_width",
      "name": "Tire Width",
      "xmlName": "tireWidth",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 7,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Width",
          "tireWidth"
        ]
      ],
      "rank": 13000,
      "dataType": "Integer",
      "definitions": "The tire's section width as measured from its inner sidewall to its outer sidewall at the widest point. Measured in millimeters: 209mm; 222mm",
      "examples": "225; 215",
      "dataDefinitions": "Number, 7 characters - The tire's section width as measured from its inner sidewall to its outer sidewall at the widest point. Measured in millimeters: 209mm; 222mm Example: 225; 215",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "200"
      ],
      "owner": true
    },
    "tireAspectRatio": {
      "key": "tire_aspect_ratio",
      "name": "Tire Aspect Ratio",
      "xmlName": "tireAspectRatio",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 7,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Aspect Ratio",
          "tireAspectRatio"
        ]
      ],
      "rank": 14000,
      "dataType": "Integer",
      "definitions": "Number describing the tire’s profile and is the ratio of sidewall height as a percentage of the nominal section width of the tire, as specified by the manufacturer. Typically used as part of the ISO tire code printed on the tire.  The higher the number, the taller the sidewall; the lower the number, the lower the sidewall. For example, 60 indicates that this tire size's sidewall height (from rim to tread) is 60% of its section width.",
      "examples": "50; 75",
      "dataDefinitions": "Number, 7 characters - Number describing the tire’s profile and is the ratio of sidewall height as a percentage of the nominal section width of the tire, as specified by the manufacturer. Typically used as part of the ISO tire code printed on the tire.  The higher the number, the taller the sidewall; the lower the number, the lower the sidewall. For example, 60 indicates that this tire size's sidewall height (from rim to tread) is 60% of its section width. Example: 50; 75",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "50"
      ],
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
    },
    "wheelDiameter": {
      "key": "wheel_diameter",
      "name": "Wheel Diameter",
      "xmlName": "wheelDiameter",
      "requirementLevel": "Recommended",
      "acceptableUnits": "in",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 9,
      "precision": "3",
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Measure",
          "wheelDiameter_measure"
        ],
        [
          "Unit",
          "wheelDiameter_unit"
        ]
      ],
      "rank": 15000,
      "dataType": "Decimal",
      "definitions": "The size (diameter) of the wheel as measured in inches. If item is a tire, used for fitting tires and used as part of the ISO tire code printed on a vehicle tire. For example,16 indicates the wheel rim size the tire is designed to fit.",
      "examples": "16",
      "dataDefinitions": "Decimal, 9 characters - The size (diameter) of the wheel as measured in inches. If item is a tire, used for fitting tires and used as part of the ISO tire code printed on a vehicle tire. For example,16 indicates the wheel rim size the tire is designed to fit. Example: 16",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true,
      "childAttributes": {
        "wheelDiameter_measure": {
          "key": "wheel_diameter",
          "name": "Measure",
          "xmlName": "measure",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 15000,
          "dataType": "Decimal",
          "definitions": "The size (diameter) of the wheel as measured in inches. If item is a tire, used for fitting tires and used as part of the ISO tire code printed on a vehicle tire. For example,16 indicates the wheel rim size the tire is designed to fit.",
          "examples": "16",
          "dataDefinitions": "Decimal, 9 characters - The size (diameter) of the wheel as measured in inches. If item is a tire, used for fitting tires and used as part of the ISO tire code printed on a vehicle tire. For example,16 indicates the wheel rim size the tire is designed to fit. Example: 16",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "wheelDiameter",
          "parentMultiSelect": "N",
          "values": [
            16
          ],
          "owner": true
        },
        "wheelDiameter_unit": {
          "key": "wheel_diameter",
          "name": "Unit",
          "xmlName": "unit",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in",
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 15000,
          "dataType": "String",
          "definitions": "The size (diameter) of the wheel as measured in inches. If item is a tire, used for fitting tires and used as part of the ISO tire code printed on a vehicle tire. For example,16 indicates the wheel rim size the tire is designed to fit.",
          "examples": "16",
          "dataDefinitions": "Closed List - The size (diameter) of the wheel as measured in inches. If item is a tire, used for fitting tires and used as part of the ISO tire code printed on a vehicle tire. For example,16 indicates the wheel rim size the tire is designed to fit.",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "wheelDiameter",
          "parentMultiSelect": "N",
          "validValues": [
            "in"
          ],
          "values": [
            "in"
          ],
          "owner": true
        }
      }
    },
    "overallDiameter": {
      "key": "overall_diameter",
      "name": "Overall Diameter",
      "xmlName": "overallDiameter",
      "requirementLevel": "Recommended",
      "acceptableUnits": "in",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 9,
      "precision": "3",
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Measure",
          "overallDiameter_measure"
        ],
        [
          "Unit",
          "overallDiameter_unit"
        ]
      ],
      "rank": 16000,
      "dataType": "Decimal",
      "definitions": "Outer diameter of the tire measured in the center of the tread. This measurement is done according to industry standards (no load, mounted on measuring rim).",
      "examples": "23.11",
      "dataDefinitions": "Decimal, 9 characters - Outer diameter of the tire measured in the center of the tread. This measurement is done according to industry standards (no load, mounted on measuring rim). Example: 23.11",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed.",
      "childAttributes": {
        "overallDiameter_measure": {
          "key": "overall_diameter",
          "name": "Measure",
          "xmlName": "measure",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 16000,
          "dataType": "Decimal",
          "definitions": "Outer diameter of the tire measured in the center of the tread. This measurement is done according to industry standards (no load, mounted on measuring rim).",
          "examples": "23.11",
          "dataDefinitions": "Decimal, 9 characters - Outer diameter of the tire measured in the center of the tread. This measurement is done according to industry standards (no load, mounted on measuring rim). Example: 23.11",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "overallDiameter",
          "parentMultiSelect": "N",
          "values": [
            16.88
          ],
          "owner": false,
          "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
        },
        "overallDiameter_unit": {
          "key": "overall_diameter",
          "name": "Unit",
          "xmlName": "unit",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in",
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 16000,
          "dataType": "String",
          "definitions": "Outer diameter of the tire measured in the center of the tread. This measurement is done according to industry standards (no load, mounted on measuring rim).",
          "examples": "23.11",
          "dataDefinitions": "Closed List - Outer diameter of the tire measured in the center of the tread. This measurement is done according to industry standards (no load, mounted on measuring rim).",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "overallDiameter",
          "parentMultiSelect": "N",
          "validValues": [
            "in"
          ],
          "values": [
            "in"
          ],
          "owner": false,
          "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
        }
      }
    },
    "tireLoadIndex": {
      "key": "tire_load_index",
      "name": "Tire Load Index",
      "xmlName": "tireLoadIndex",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 7,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Load Index",
          "tireLoadIndex"
        ]
      ],
      "rank": 17000,
      "dataType": "Integer",
      "definitions": "Assigned numerical value that corresponds to the maximum amount of weight a tire can safely carry as shown on Tire Load Index charts. Example: The load index 90 has been assigned to a load carrying capacity of 1323 pounds.",
      "examples": "76; 87; 92",
      "dataDefinitions": "Number, 7 characters - Assigned numerical value that corresponds to the maximum amount of weight a tire can safely carry as shown on Tire Load Index charts. Example: The load index 90 has been assigned to a load carrying capacity of 1323 pounds. Example: 76; 87; 92",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "88"
      ],
      "owner": true
    },
    "tireSpeedRating": {
      "key": "tire_speed_rating",
      "name": "Tire Speed Rating",
      "xmlName": "tireSpeedRating",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 100,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Speed Rating",
          "tireSpeedRating"
        ]
      ],
      "rank": 18000,
      "dataType": "String",
      "definitions": "Rating system symbol that corresponds to a tire's maximum speed capability. For example, a speed rating of L corresponds to a maximum speed of 75mph.",
      "examples": "H; L; S; T; V",
      "dataDefinitions": "Alphanumeric, 100 characters - Rating system symbol that corresponds to a tire's maximum speed capability. For example, a speed rating of L corresponds to a maximum speed of 75mph. Example: H; L; S; T; V",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "tireSeason": {
      "key": "tire_season",
      "name": "Tire Season",
      "xmlName": "tireSeason",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 100,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Season",
          "tireSeason"
        ]
      ],
      "rank": 19000,
      "dataType": "String",
      "definitions": "Tire types designed to meet specific needs based on time of year and weather conditions.",
      "examples": "All-Season; Winter",
      "dataDefinitions": "Alphanumeric, 100 characters - Tire types designed to meet specific needs based on time of year and weather conditions. Example: All-Season; Winter",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "all season"
      ],
      "owner": true
    },
    "tireTreadwearRating": {
      "key": "tire_treadwear_rating",
      "name": "Tire Treadwear Rating",
      "xmlName": "tireTreadwearRating",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 7,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Treadwear Rating",
          "tireTreadwearRating"
        ]
      ],
      "rank": 20000,
      "dataType": "Integer",
      "definitions": "The numeric portion of the UTQG (Uniform Tire Quality Grade Standards) printed on the sidewall of the tire that signifies a tire's durability. The UTQG (Uniform Tire Quality Grade) system is a set of standards developed by the National Highway Traffic Safety Administration (NHTSA), which is part of the United States Department of Transportation (DOT). Higher tread wear numbers indicate that the tread of a tire should last longer. A control tire is assigned a grade of 100. Other tires are compared to the control tire. For example, a tire grade of 200 should wear twice as long as the control tire.",
      "examples": "200; 400; 700",
      "dataDefinitions": "Number, 7 characters - The numeric portion of the UTQG (Uniform Tire Quality Grade Standards) printed on the sidewall of the tire that signifies a tire's durability. The UTQG (Uniform Tire Quality Grade) system is a set of standards developed by the National Highway Traffic Safety Administration (NHTSA), which is part of the United States Department of Transportation (DOT). Higher tread wear numbers indicate that the tread of a tire should last longer. A control tire is assigned a grade of 100. Other tires are compared to the control tire. For example, a tire grade of 200 should wear twice as long as the control tire. Example: 200; 400; 700",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "99"
      ],
      "owner": true
    },
    "tireLoadRange": {
      "key": "tire_load_range",
      "name": "Tire Load Range",
      "xmlName": "tireLoadRange",
      "requirementLevel": "Recommended",
      "validValues": [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "L",
        "M",
        "N"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 1,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Load Range",
          "tireLoadRange"
        ]
      ],
      "rank": 21000,
      "dataType": "String",
      "definitions": "The 'Load Range' letter on a light truck tire indicates its ply rating.",
      "examples": "A; B; C; D; E; F; G; H; J; L; M; N",
      "dataDefinitions": "Closed List - The 'Load Range' letter on a light truck tire indicates its ply rating.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "B"
      ],
      "owner": true
    },
    "tireType": {
      "key": "tire_type",
      "name": "Tire Type",
      "xmlName": "tireType",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 200,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Type",
          "tireType"
        ]
      ],
      "rank": 22000,
      "dataType": "String",
      "definitions": "Category of vehicle tires based on use: Motorcycle Tire; Passenger Car Tire; Performance Tire",
      "examples": "ATV & Motorcycle Tires; Crossover & Minivan Tires; Racing Tires; SUV Tires; Sedan Tires; Sport & Performance Tires; Truck Tires",
      "dataDefinitions": "Alphanumeric, 200 characters - Category of vehicle tires based on use: Motorcycle Tire; Passenger Car Tire; Performance Tire Example: ATV & Motorcycle Tires; Crossover & Minivan Tires; Racing Tires; SUV Tires; Sedan Tires; Sport & Performance Tires; Truck Tires",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "isRunFlat": {
      "key": "is_run_flat",
      "name": "Is Run Flat",
      "xmlName": "isRunFlat",
      "requirementLevel": "Recommended",
      "validValues": [
        "No",
        "Yes"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Is Run Flat",
          "isRunFlat"
        ]
      ],
      "rank": 23000,
      "dataType": "Boolean",
      "definitions": "Entering a \"Y\" value signifies the tire is designed to resist the effects of deflation when punctured, and enables the vehicle to go at reduced speeds (under 3 mph (4.8 km/h)), and for limited distances (up to 10 mi (16 km).",
      "examples": "Yes; No",
      "dataDefinitions": "Closed List - Entering a \"Y\" value signifies the tire is designed to resist the effects of deflation when punctured, and enables the vehicle to go at reduced speeds (under 3 mph (4.8 km/h)), and for limited distances (up to 10 mi (16 km).",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "Yes"
      ],
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
    },
    "mudAndSnowRated": {
      "key": "mud_and_snow_rated",
      "name": "Mud & Snow Rated",
      "xmlName": "mudAndSnowRated",
      "requirementLevel": "Recommended",
      "validValues": [
        "No",
        "Yes"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Mud & Snow Rated",
          "mudAndSnowRated"
        ]
      ],
      "rank": 24000,
      "dataType": "Boolean",
      "definitions": "Y indicates the tire has been specially designed, manufactured and rated to be used in muddy or very snowy and cold conditions. Tires with this rating frequently have are marked with M+T or M&T.",
      "examples": "Yes; No",
      "dataDefinitions": "Closed List - Y indicates the tire has been specially designed, manufactured and rated to be used in muddy or very snowy and cold conditions. Tires with this rating frequently have are marked with M+T or M&T.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "No"
      ],
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
    },
    "vehicleClassDesignator": {
      "key": "vehicle_class_designator",
      "name": "Vehicle Class Designator",
      "xmlName": "vehicleClassDesignator",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 2,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Vehicle Class Designator",
          "vehicleClassDesignator"
        ]
      ],
      "rank": 25000,
      "dataType": "String",
      "definitions": "The letter or letters indicating the intended use or vehicle class for the tire, as specified by the manufacturer.Typically used as part of the ISO tire code printed on the tire. For example, tires that have a designation of T (Temporary) means the tire has been designed for restricted usage for space-saver type spare wheels.",
      "examples": "P; T; LT; C; ST",
      "dataDefinitions": "Alphanumeric, 2 characters - The letter or letters indicating the intended use or vehicle class for the tire, as specified by the manufacturer.Typically used as part of the ISO tire code printed on the tire. For example, tires that have a designation of T (Temporary) means the tire has been designed for restricted usage for space-saver type spare wheels. Example: P; T; LT; C; ST",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "constructionType": {
      "key": "construction_type",
      "name": "Construction Type",
      "xmlName": "constructionType",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 200,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Construction Type",
          "constructionType"
        ]
      ],
      "rank": 26000,
      "dataType": "String",
      "definitions": "The term that describes type of internal construction of the tire.",
      "examples": "Radial; Diagonal",
      "dataDefinitions": "Alphanumeric, 200 characters - The term that describes type of internal construction of the tire. Example: Radial; Diagonal",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "treadDepth": {
      "key": "tread_depth",
      "name": "Tread Depth",
      "xmlName": "treadDepth",
      "requirementLevel": "Recommended",
      "acceptableUnits": "in,mm",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 7,
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Measure",
          "treadDepth_measure"
        ],
        [
          "Unit",
          "treadDepth_unit"
        ]
      ],
      "rank": 27000,
      "dataType": "String",
      "definitions": "Vertical measurement between the top of the tread rubber to the bottom of the tire's deepest grooves tread depth, expressed in 32nds of an inch.",
      "examples": "10/32",
      "dataDefinitions": "Alphanumeric, 7 characters - Vertical measurement between the top of the tread rubber to the bottom of the tire's deepest grooves tread depth, expressed in 32nds of an inch. Example: 10/32",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true,
      "childAttributes": {
        "treadDepth_measure": {
          "key": "tread_depth",
          "name": "Measure",
          "xmlName": "measure",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in,mm",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 7,
          "isComplex": false,
          "isChild": true,
          "rank": 27000,
          "dataType": "String",
          "definitions": "Vertical measurement between the top of the tread rubber to the bottom of the tire's deepest grooves tread depth, expressed in 32nds of an inch.",
          "examples": "10/32",
          "dataDefinitions": "Alphanumeric, 7 characters - Vertical measurement between the top of the tread rubber to the bottom of the tire's deepest grooves tread depth, expressed in 32nds of an inch. Example: 10/32",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "treadDepth",
          "parentMultiSelect": "N",
          "owner": true
        },
        "treadDepth_unit": {
          "key": "tread_depth",
          "name": "Unit",
          "xmlName": "unit",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in,mm",
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 7,
          "isComplex": false,
          "isChild": true,
          "rank": 27000,
          "dataType": "String",
          "definitions": "Vertical measurement between the top of the tread rubber to the bottom of the tire's deepest grooves tread depth, expressed in 32nds of an inch.",
          "examples": "10/32",
          "dataDefinitions": "Closed List - Vertical measurement between the top of the tread rubber to the bottom of the tire's deepest grooves tread depth, expressed in 32nds of an inch.",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "treadDepth",
          "parentMultiSelect": "N",
          "validValues": [
            "in",
            "mm"
          ],
          "owner": true
        }
      }
    },
    "treadWidth": {
      "key": "tread_width",
      "name": "Tread Width",
      "xmlName": "treadWidth",
      "requirementLevel": "Recommended",
      "acceptableUnits": "in,mm",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 7,
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Measure",
          "treadWidth_measure"
        ],
        [
          "Unit",
          "treadWidth_unit"
        ]
      ],
      "rank": 28000,
      "dataType": "String",
      "definitions": "Measurement between the outer and inner edges of the tire's tread design as specified by the manufacturer. Usually this measurement approximates the width of the tread that comes into contact with the road.",
      "examples": "5.6 in; 7.1 in",
      "dataDefinitions": "Alphanumeric, 7 characters - Measurement between the outer and inner edges of the tire's tread design as specified by the manufacturer. Usually this measurement approximates the width of the tread that comes into contact with the road. Example: 5.6 in; 7.1 in",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true,
      "childAttributes": {
        "treadWidth_measure": {
          "key": "tread_width",
          "name": "Measure",
          "xmlName": "measure",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in,mm",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 7,
          "isComplex": false,
          "isChild": true,
          "rank": 28000,
          "dataType": "String",
          "definitions": "Measurement between the outer and inner edges of the tire's tread design as specified by the manufacturer. Usually this measurement approximates the width of the tread that comes into contact with the road.",
          "examples": "5.6 in; 7.1 in",
          "dataDefinitions": "Alphanumeric, 7 characters - Measurement between the outer and inner edges of the tire's tread design as specified by the manufacturer. Usually this measurement approximates the width of the tread that comes into contact with the road. Example: 5.6 in; 7.1 in",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "treadWidth",
          "parentMultiSelect": "N",
          "owner": true
        },
        "treadWidth_unit": {
          "key": "tread_width",
          "name": "Unit",
          "xmlName": "unit",
          "requirementLevel": "Recommended",
          "acceptableUnits": "in,mm",
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 7,
          "isComplex": false,
          "isChild": true,
          "rank": 28000,
          "dataType": "String",
          "definitions": "Measurement between the outer and inner edges of the tire's tread design as specified by the manufacturer. Usually this measurement approximates the width of the tread that comes into contact with the road.",
          "examples": "5.6 in; 7.1 in",
          "dataDefinitions": "Closed List - Measurement between the outer and inner edges of the tire's tread design as specified by the manufacturer. Usually this measurement approximates the width of the tread that comes into contact with the road.",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "treadWidth",
          "parentMultiSelect": "N",
          "validValues": [
            "in",
            "mm"
          ],
          "owner": true
        }
      }
    },
    "tireTractionRating": {
      "key": "tire_traction_rating",
      "name": "Tire Traction Rating",
      "xmlName": "tireTractionRating",
      "requirementLevel": "Recommended",
      "validValues": [
        "A",
        "AA",
        "B",
        "C"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 4000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Traction Rating",
          "tireTractionRating"
        ]
      ],
      "rank": 29000,
      "dataType": "String",
      "definitions": "Rating of a tire's ability to stop on wet surfaces, as specified by the manufacturer. Component of the UTQG (Uniform Tire Quality Grade) system is a set of standards developed by the National Highway Traffic Safety Administration (NHTSA), which is part of the United States Department of Transportation (DOT). The traction grades range from AA (highest) to C (lowest). A tire that is graded AA should stop better on wet surfaces than a tire with a lower grade.",
      "examples": "AA; A; B; C",
      "dataDefinitions": "Closed List - Rating of a tire's ability to stop on wet surfaces, as specified by the manufacturer. Component of the UTQG (Uniform Tire Quality Grade) system is a set of standards developed by the National Highway Traffic Safety Administration (NHTSA), which is part of the United States Department of Transportation (DOT). The traction grades range from AA (highest) to C (lowest). A tire that is graded AA should stop better on wet surfaces than a tire with a lower grade.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "AA"
      ],
      "owner": true
    },
    "tireTemperatureRating": {
      "key": "tire_temperature_rating",
      "name": "Tire Temperature Rating",
      "xmlName": "tireTemperatureRating",
      "requirementLevel": "Recommended",
      "validValues": [
        "A",
        "B",
        "C"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 4000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Temperature Rating",
          "tireTemperatureRating"
        ]
      ],
      "rank": 30000,
      "dataType": "String",
      "definitions": "Portion of the UTQG rating system that indicates a tire's resistance to heat and its ability to dissipate heat. The UTQG (Uniform Tire Quality Grade) system is a set of standards developed by the National Highway Traffic Safety Administration (NHTSA), which is part of the United States Department of Transportation (DOT). The grades range from A (highest) to C (lowest). A tire that is graded A would run cooler than a tire with a lower grade.",
      "examples": "A; B; C",
      "dataDefinitions": "Closed List - Portion of the UTQG rating system that indicates a tire's resistance to heat and its ability to dissipate heat. The UTQG (Uniform Tire Quality Grade) system is a set of standards developed by the National Highway Traffic Safety Administration (NHTSA), which is part of the United States Department of Transportation (DOT). The grades range from A (highest) to C (lowest). A tire that is graded A would run cooler than a tire with a lower grade.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "A"
      ],
      "owner": true
    },
    "tireSidewallStyle": {
      "key": "tire_sidewall_style",
      "name": "Tire Sidewall Style",
      "xmlName": "tireSidewallStyle",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 200,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Tire Sidewall Style",
          "tireSidewallStyle"
        ]
      ],
      "rank": 31000,
      "dataType": "String",
      "definitions": "The visual treatment of the outside of the sidewall of a tire. Can include solid color, colored stripes, or lettering.",
      "examples": "White Sidewall; Red Letter Sidewall",
      "dataDefinitions": "Alphanumeric, 200 characters - The visual treatment of the outside of the sidewall of a tire. Can include solid color, colored stripes, or lettering. Example: White Sidewall; Red Letter Sidewall",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "white wall"
      ],
      "owner": true
    },
    "maximumInflationPressure": {
      "key": "maximum_inflation_pressure",
      "name": "Maximum Inflation Pressure",
      "xmlName": "maximumInflationPressure",
      "requirementLevel": "Recommended",
      "acceptableUnits": "psi, Pa, Bar",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 9,
      "precision": "3",
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Measure",
          "maximumInflationPressure_measure"
        ],
        [
          "Unit",
          "maximumInflationPressure_unit"
        ]
      ],
      "rank": 32000,
      "dataType": "Decimal",
      "definitions": "The highest \"cold\" inflation pressure that the tire is designed to contain as specified by the manufacturer. The maximum inflation pressure is branded on the tire in kilopascals (kPa) and pounds per square inch (psi).",
      "examples": "36",
      "dataDefinitions": "Decimal, 9 characters - The highest \"cold\" inflation pressure that the tire is designed to contain as specified by the manufacturer. The maximum inflation pressure is branded on the tire in kilopascals (kPa) and pounds per square inch (psi). Example: 36",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": false,
      "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed.",
      "childAttributes": {
        "maximumInflationPressure_measure": {
          "key": "maximum_inflation_pressure",
          "name": "Measure",
          "xmlName": "measure",
          "requirementLevel": "Recommended",
          "acceptableUnits": "psi, Pa, Bar",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 32000,
          "dataType": "Decimal",
          "definitions": "The highest \"cold\" inflation pressure that the tire is designed to contain as specified by the manufacturer. The maximum inflation pressure is branded on the tire in kilopascals (kPa) and pounds per square inch (psi).",
          "examples": "36",
          "dataDefinitions": "Decimal, 9 characters - The highest \"cold\" inflation pressure that the tire is designed to contain as specified by the manufacturer. The maximum inflation pressure is branded on the tire in kilopascals (kPa) and pounds per square inch (psi). Example: 36",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "maximumInflationPressure",
          "parentMultiSelect": "N",
          "values": [
            40
          ],
          "owner": false,
          "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
        },
        "maximumInflationPressure_unit": {
          "key": "maximum_inflation_pressure",
          "name": "Unit",
          "xmlName": "unit",
          "requirementLevel": "Recommended",
          "acceptableUnits": "psi, Pa, Bar",
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 32000,
          "dataType": "String",
          "definitions": "The highest \"cold\" inflation pressure that the tire is designed to contain as specified by the manufacturer. The maximum inflation pressure is branded on the tire in kilopascals (kPa) and pounds per square inch (psi).",
          "examples": "36",
          "dataDefinitions": "Closed List - The highest \"cold\" inflation pressure that the tire is designed to contain as specified by the manufacturer. The maximum inflation pressure is branded on the tire in kilopascals (kPa) and pounds per square inch (psi).",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "maximumInflationPressure",
          "parentMultiSelect": "N",
          "validValues": [
            "psi",
            "Pa",
            "Bar"
          ],
          "values": [
            "psi"
          ],
          "owner": false,
          "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
        }
      }
    },
    "uniformTireQualityGrade": {
      "key": "uniform_tire_quality_grade_utqg",
      "name": "Uniform Tire Quality Grade (UTQG)",
      "xmlName": "uniformTireQualityGrade",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 50,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Uniform Tire Quality Grade (UTQG)",
          "uniformTireQualityGrade"
        ]
      ],
      "rank": 33000,
      "dataType": "String",
      "definitions": "The composite of three individual UTQG components of tire rating of tread wear, traction and temperature tolerance. Example format: 700 AA. These Uniform Tire Quality Grade Standards (UTQG) are administered by the U.S. Department of Transportation (DOT) National Highway Traffic Safety Administration (NHTSA). Website: http://www.nhtsa.gov/",
      "examples": "300 AB; 500 AA",
      "dataDefinitions": "Alphanumeric, 50 characters - The composite of three individual UTQG components of tire rating of tread wear, traction and temperature tolerance. Example format: 700 AA. These Uniform Tire Quality Grade Standards (UTQG) are administered by the U.S. Department of Transportation (DOT) National Highway Traffic Safety Administration (NHTSA). Website: http://www.nhtsa.gov/ Example: 300 AB; 500 AA",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "vehicleType": {
      "key": "vehicle_type",
      "name": "Vehicle Category",
      "xmlName": "vehicleType",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 1000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Vehicle Category",
          "vehicleType"
        ]
      ],
      "rank": 34000,
      "dataType": "String",
      "definitions": "Grouping of different kinds of vehicles based on use and form. Important selection criteria, especially for compatibility, for products including boat components, tires and auto accessories. Vehicle Type also used for toys such as model rocket ships and remote-controlled race cars.",
      "examples": "Bus; Car; Pickup Truck; Minivan; Motorcycle; RV; Trailer; Golf Cart; Tractor; Fishing Boat; Yacht",
      "dataDefinitions": "Alphanumeric, 1000 characters - Grouping of different kinds of vehicles based on use and form. Important selection criteria, especially for compatibility, for products including boat components, tires and auto accessories. Vehicle Type also used for toys such as model rocket ships and remote-controlled race cars. Example: Bus; Car; Pickup Truck; Minivan; Motorcycle; RV; Trailer; Golf Cart; Tractor; Fishing Boat; Yacht",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "color": {
      "key": "color",
      "name": "Color",
      "xmlName": "color",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "Y",
      "minDataLength": 1,
      "maxDataLength": 600,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Color",
          "color"
        ]
      ],
      "rank": 35000,
      "dataType": "String",
      "definitions": "Color as described by the manufacturer.",
      "examples": "Aqua; Burgundy; Mauve; Fuchsia",
      "dataDefinitions": "Alphanumeric, 600 characters - Color as described by the manufacturer. Example: Aqua; Burgundy; Mauve; Fuchsia",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "Black"
      ],
      "owner": true
    },
    "assembledProductWeight": {
      "key": "assembled_product_weight",
      "name": "Assembled Product Weight",
      "xmlName": "assembledProductWeight",
      "requirementLevel": "Recommended",
      "acceptableUnits": "oz, lb, g, kg",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 9,
      "precision": "3",
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Measure",
          "assembledProductWeight_measure"
        ],
        [
          "Unit",
          "assembledProductWeight_unit"
        ]
      ],
      "rank": 36000,
      "dataType": "Decimal",
      "definitions": "The weight of the fully assembled product. NOTE: This information is shown on the item page.",
      "examples": "5",
      "dataDefinitions": "Decimal, 9 characters - The weight of the fully assembled product. NOTE: This information is shown on the item page. Example: 5",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true,
      "childAttributes": {
        "assembledProductWeight_measure": {
          "key": "assembled_product_weight",
          "name": "Measure",
          "xmlName": "measure",
          "requirementLevel": "Recommended",
          "acceptableUnits": "oz, lb, g, kg",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 36000,
          "dataType": "Decimal",
          "definitions": "The weight of the fully assembled product. NOTE: This information is shown on the item page.",
          "examples": "5",
          "dataDefinitions": "Decimal, 9 characters - The weight of the fully assembled product. NOTE: This information is shown on the item page. Example: 5",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "assembledProductWeight",
          "parentMultiSelect": "N",
          "owner": true
        },
        "assembledProductWeight_unit": {
          "key": "assembled_product_weight",
          "name": "Unit",
          "xmlName": "unit",
          "requirementLevel": "Recommended",
          "acceptableUnits": "oz, lb, g, kg",
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": true,
          "rank": 36000,
          "dataType": "String",
          "definitions": "The weight of the fully assembled product. NOTE: This information is shown on the item page.",
          "examples": "5",
          "dataDefinitions": "Closed List - The weight of the fully assembled product. NOTE: This information is shown on the item page.",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "parentKey": "assembledProductWeight",
          "parentMultiSelect": "N",
          "validValues": [
            "oz",
            "lb",
            "g",
            "kg"
          ],
          "owner": true
        }
      }
    },
    "features": {
      "key": "features",
      "name": "Additional Features",
      "xmlName": "features",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "Y",
      "minDataLength": 1,
      "maxDataLength": 4000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Additional Features",
          "features"
        ]
      ],
      "rank": 37000,
      "dataType": "String",
      "definitions": "List notable features of the item.",
      "examples": "Fire-Resistant; Has Handles; Removable Cover; Engraved; As Seen On TV",
      "dataDefinitions": "Alphanumeric, 4000 characters - List notable features of the item. Example: Fire-Resistant; Has Handles; Removable Cover; Engraved; As Seen On TV",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "owner": true
    },
    "warrantyText": {
      "key": "warranty_information",
      "name": "Warranty Text",
      "xmlName": "warrantyText",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 20000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Warranty Text",
          "warrantyText"
        ]
      ],
      "rank": 38000,
      "dataType": "String",
      "definitions": "The full text of the warranty terms, including what is covered by the warranty and the duration of the warranty.",
      "examples": "This warranty covers any defects in materials or workmanship, including installation, with the exceptions of fading or discoloration caused by exposure to sunlight or chemicals. This warranty runs for five years from the date your carpet is installed. Counterpoint will either replace your carpet with new carpet of similar composition and price, or refund the full purchase price of your carpet, whichever you prefer. Contact Counterpoint at 800-867-5309... [continued].",
      "dataDefinitions": "Alphanumeric, 20000 characters - The full text of the warranty terms, including what is covered by the warranty and the duration of the warranty. Example: This warranty covers any defects in materials or workmanship, including installation, with the exceptions of fading or discoloration caused by exposure to sunlight or chemicals. This warranty runs for five years from the date your carpet is installed. Counterpoint will either replace your carpet with new carpet of similar composition and price, or refund the full purchase price of your carpet, whichever you prefer. Contact Counterpoint at 800-867-5309... [continued].",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "no warranty"
      ],
      "owner": true
    },
    "warrantyURL": {
      "key": "warranty_url",
      "name": "Warranty URL",
      "xmlName": "warrantyURL",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Warranty URL",
          "warrantyURL"
        ]
      ],
      "rank": 39000,
      "dataType": "URL",
      "definitions": "The Warranty URL is the web location of the image, PDF, or link to the manufacturer's warranty page, showing the warranty and its terms, including the duration of the warranty. URLs must begin with http:// or https:// NOTE: Please remember to update the link and/or text of the warranty as the warranty changes. If supplying an image, provide the final destination image URL (no-redirects) that is publicly accessible (no username/password required) and ends in a proper image extension. Recommended file type: JPEG Accepted file types: JPG, PNG, GIF, BMP Maximum file size: 10 MB.",
      "examples": "http://www.walmart.com/warranty_info.pdf",
      "dataDefinitions": "URL, The Warranty URL is the web location of the image, PDF, or link to the manufacturer's warranty page, showing the warranty and its terms, including the duration of the warranty. URLs must begin with http:// or https:// NOTE: Please remember to update the link and/or text of the warranty as the warranty changes. If supplying an image, provide the final destination image URL (no-redirects) that is publicly accessible (no username/password required) and ends in a proper image extension. Recommended file type: JPEG Accepted file types: JPG, PNG, GIF, BMP Maximum file size: 10 MB. Example: http://www.walmart.com/warranty_info.pdf",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "values": [
        "https://lksd.com.lskd.coksjf.d"
      ],
      "owner": true
    },
    "additionalProductAttributes": {
      "key": "additional_product_attributes",
      "name": "Additional Product Attributes",
      "xmlName": "additionalProductAttributes",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "Y",
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Additional Product Attribute Name",
          "productAttributeName"
        ],
        [
          "Additional Product Attribute Value",
          "productAttributeValue"
        ]
      ],
      "rank": 40000,
      "dataType": "Object",
      "definitions": "The parent attribute containing: Additional Attribute Name and Additional Attribute Value.",
      "examples": "test",
      "dataDefinitions": "The parent attribute containing: Additional Attribute Name and Additional Attribute Value. Example: test",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
      "uiHeader": "Item Content",
      "uiSubHeader": "Optional",
      "owner": true,
      "childAttributes": {
        "productAttributeName": {
          "key": "addtional_product_attribute_name",
          "name": "Additional Product Attribute Name",
          "xmlName": "productAttributeName",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 100,
          "isComplex": false,
          "isChild": true,
          "rank": 1000,
          "dataType": "String",
          "parentKey": "additionalProductAttributes",
          "parentMultiSelect": "Y",
          "definitions": "Add an additional attribute not present in this template. Use camelCase for the name.",
          "examples": "additionalAttributeName",
          "dataDefinitions": "Alphanumeric, 100 characters - Add an additional attribute not present in this template. Use camelCase for the name. Example: additionalAttributeName",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "uiSubHeader": "Optional",
          "owner": true
        },
        "productAttributeValue": {
          "key": "addtional_product_attribute_value",
          "name": "Additional Product Attribute Value",
          "xmlName": "productAttributeValue",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 4000,
          "isComplex": false,
          "isChild": true,
          "rank": 2000,
          "dataType": "String",
          "parentKey": "additionalProductAttributes",
          "parentMultiSelect": "Y",
          "definitions": "Write your \"Additional Product Attribute Value\" to give a description or answer for your \"Additional Product Attribute Name.\" Together, these allow you to create your own descriptor that is not already in the taxonomy.",
          "examples": "15\"; 19mm; Yes; No",
          "dataDefinitions": "Alphanumeric, 4000 characters - Write your \"Additional Product Attribute Value\" to give a description or answer for your \"Additional Product Attribute Name.\" Together, these allow you to create your own descriptor that is not already in the taxonomy. Example: 15\"; 19mm; Yes; No",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Category-specific attributes to improve search & browse on Walmart.com",
          "uiHeader": "Item Content",
          "uiSubHeader": "Optional",
          "owner": true
        }
      }
    },
    "variantGroupId": {
      "key": "variant_group_id",
      "name": "Variant Group ID",
      "xmlName": "variantGroupId",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "N",
      "minDataLength": 1,
      "maxDataLength": 300,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Variant Group ID",
          "variantGroupId"
        ]
      ],
      "rank": 41000,
      "dataType": "String",
      "definitions": "Required if item is a variant. Make up a number and/or letter code for “Variant Group ID” and add this to all variations of the same product. Variant Group id should be unique for one group. Partners must ensure uniqueness of their Variant Group IDs.",
      "examples": "HANESV025",
      "dataDefinitions": "Alphanumeric, 300 characters - Required if item is a variant. Make up a number and/or letter code for “Variant Group ID” and add this to all variations of the same product. Variant Group id should be unique for one group. Partners must ensure uniqueness of their Variant Group IDs. Example: HANESV025",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Variant Experience",
      "uiHeader": "Item Content",
      "values": [
        "test_is_primary"
      ],
      "owner": true
    },
    "removeVariantGroup": {
      "key": "removefromvariantgroup_62eda54990c7c929bb43aa82_8bda1109-df45-415c-987c-31ca0a7f3889",
      "name": "Remove from Variant Group?",
      "xmlName": "removeVariantGroup",
      "requirementLevel": "Recommended",
      "validValues": [
        "No",
        "Yes"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Remove from Variant Group?",
          "removeVariantGroup"
        ]
      ],
      "rank": 41500,
      "dataType": "Boolean",
      "definitions": "Indicates that a variant(s) should be removed from a variant group offering.",
      "examples": "Yes;No",
      "dataDefinitions": "Closed List - Indicates that a variant(s) should be removed from a variant group offering.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Variant Experience",
      "uiHeader": "Item Content",
      "owner": true
    },
    "variantAttributeNames": {
      "key": "variant_attribute_names",
      "name": "Variant Attribute Names",
      "xmlName": "variantAttributeNames",
      "requirementLevel": "Recommended",
      "validValues": [
        "color",
        "count",
        "diameter",
        "size"
      ],
      "closedList": "Y",
      "multiSelect": "Y",
      "minDataLength": 1,
      "maxDataLength": 4000,
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Variant Attribute Names",
          "variantAttributeNames"
        ]
      ],
      "rank": 42000,
      "dataType": "String",
      "definitions": "Designate all attributes by which the item is varying (specific to each category). Variant attribute type needs to be specified within the individual columns, e.g. if choosing color in “Variant Attribute Names”, search for “color” on the sheet and fill out the column corresponding to color.",
      "examples": "color",
      "dataDefinitions": "Closed List - Designate all attributes by which the item is varying (specific to each category). Variant attribute type needs to be specified within the individual columns, e.g. if choosing color in “Variant Attribute Names”, search for “color” on the sheet and fill out the column corresponding to color.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Variant Experience",
      "uiHeader": "Item Content",
      "values": [
        "color"
      ],
      "owner": true
    },
    "isPrimaryVariant": {
      "key": "is_primary_variant",
      "name": "Is Primary Variant",
      "xmlName": "isPrimaryVariant",
      "requirementLevel": "Recommended",
      "validValues": [
        "No",
        "Yes"
      ],
      "closedList": "Y",
      "multiSelect": "N",
      "isComplex": false,
      "isChild": false,
      "children": [
        [
          "Is Primary Variant",
          "isPrimaryVariant"
        ]
      ],
      "rank": 43000,
      "dataType": "Boolean",
      "definitions": "Note whether item is intended as the main variant in a variant grouping. The primary variant will appear as the image when customers search and the first image displayed on the item page. This should be set as \"Yes\" for only one item in a group of variants.",
      "examples": "No",
      "dataDefinitions": "Closed List - Note whether item is intended as the main variant in a variant grouping. The primary variant will appear as the image when customers search and the first image displayed on the item page. This should be set as \"Yes\" for only one item in a group of variants.",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Variant Experience",
      "uiHeader": "Item Content",
      "values": [
        "No"
      ],
      "owner": true
    },
    "swatchImages": {
      "key": "swatch_images",
      "name": "Swatch Images",
      "xmlName": "swatchImages",
      "requirementLevel": "Recommended",
      "closedList": "N",
      "multiSelect": "Y",
      "isComplex": true,
      "isChild": false,
      "children": [
        [
          "Swatch Variant Attribute",
          "swatchVariantAttribute"
        ],
        [
          "Swatch Image URL",
          "swatchImageUrl"
        ]
      ],
      "rank": 44000,
      "dataType": "Object",
      "definitions": "Enter the swatch image location in \"Swatch Image URL\" and its corresponding variant attribute name in \"Swatch Variant Attribute\". Required for products with visual variations, like color or pattern. List the swatches in the order you recommend they appear on the site.",
      "examples": "Variant Attribute: Color Swatch Image Url: http://www.walmart.com/somepath/some-image.jpg",
      "dataDefinitions": "Enter the swatch image location in \"Swatch Image URL\" and its corresponding variant attribute name in \"Swatch Variant Attribute\". Required for products with visual variations, like color or pattern. List the swatches in the order you recommend they appear on the site. Example: Variant Attribute: Color Swatch Image Url: http://www.walmart.com/somepath/some-image.jpg",
      "schemaGroup": "Visible",
      "jsonPath": "Visible/Tires/",
      "excelHeader": "Variant Experience",
      "uiHeader": "Item Content",
      "owner": true,
      "childAttributes": {
        "swatchVariantAttribute": {
          "key": "swatch_variant_attribute",
          "name": "Swatch Variant Attribute",
          "xmlName": "swatchVariantAttribute",
          "requirementLevel": "Recommended",
          "validValues": [
            "color",
            "count",
            "diameter",
            "size"
          ],
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 4000,
          "isComplex": false,
          "isChild": true,
          "rank": 1000,
          "dataType": "String",
          "parentKey": "swatchImages",
          "parentMultiSelect": "Y",
          "definitions": "Attribute name corresponding to the swatch.",
          "examples": "Polka Dot; Ruby Red",
          "dataDefinitions": "Closed List - Attribute name corresponding to the swatch.",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Variant Experience",
          "uiHeader": "Item Content",
          "owner": true
        },
        "swatchImageUrl": {
          "key": "swatch_image_url",
          "name": "Swatch Image URL",
          "xmlName": "swatchImageUrl",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 2000,
          "isComplex": false,
          "isChild": true,
          "rank": 2000,
          "dataType": "URL",
          "parentKey": "swatchImages",
          "parentMultiSelect": "Y",
          "definitions": "This is required for products with visual variations and will be shown as a small square on the item page. Recommended resolution is 100 x 100 pixels. Provide the final destination image URL (no-redirects) that is publicly accessible (no username/password required) and ends in a proper image extension such as, .jpg, .png or .gif. We recommend using a unique URL that is not the same as the primary or secondary image URLs.",
          "examples": "http://www.walmart.com/somepath/some-image.jpg",
          "dataDefinitions": "URL, 2000 characters - This is required for products with visual variations and will be shown as a small square on the item page. Recommended resolution is 100 x 100 pixels. Provide the final destination image URL (no-redirects) that is publicly accessible (no username/password required) and ends in a proper image extension such as, .jpg, .png or .gif. We recommend using a unique URL that is not the same as the primary or secondary image URLs. Example: http://www.walmart.com/somepath/some-image.jpg",
          "schemaGroup": "Visible",
          "jsonPath": "Visible/Tires/",
          "excelHeader": "Variant Experience",
          "uiHeader": "Item Content",
          "owner": true
        }
      }
    }
  },
  "additionalCategoryData": {
    "Marketplace Maintenance": {
      "key": "marketplace_maintenance",
      "name": "Marketplace Maintenance",
      "attributes": {
        "sku": {
          "key": "sku",
          "name": "SKU",
          "xmlName": "sku",
          "requirementLevel": "Required",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 50,
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "SKU",
              "sku"
            ]
          ],
          "rank": 1000,
          "dataType": "String",
          "definitions": "The string of letters and/or numbers a partner uses to identify the item. Walmart includes this value in all communications regarding item information such as orders.",
          "examples": "TRVAL28726",
          "dataDefinitions": "Alphanumeric, 50 characters - The string of letters and/or numbers a partner uses to identify the item. Walmart includes this value in all communications regarding item information such as orders. Example: TRVAL28726",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "SKU",
          "uiHeader": "Item Content",
          "uiSubHeader": "Offer Details",
          "values": [
            "GOYR0771824535YXL"
          ],
          "owner": true
        },
        "productIdentifiers": {
          "key": "product_identifiers",
          "name": "Product Identifiers",
          "xmlName": "productIdentifiers",
          "requirementLevel": "Required",
          "closedList": "N",
          "multiSelect": "N",
          "isComplex": true,
          "isChild": false,
          "children": [
            [
              "Product ID Type",
              "productIdType"
            ],
            [
              "Product ID",
              "productId"
            ]
          ],
          "rank": 2000,
          "dataType": "Object",
          "definitions": "Specify at least one Product ID and its ID Type.",
          "dataDefinitions": "Specify at least one Product ID and its ID Type.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Product Identifiers",
          "uiHeader": "Item Content",
          "owner": true,
          "childAttributes": {
            "productIdType": {
              "key": "product_id_type",
              "name": "Product ID Type",
              "xmlName": "productIdType",
              "requirementLevel": "Required",
              "validValues": [
                "EAN",
                "GTIN",
                "ISBN",
                "UPC"
              ],
              "closedList": "Y",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 100,
              "isComplex": false,
              "isChild": true,
              "rank": 1000,
              "dataType": "String",
              "parentKey": "productIdentifiers",
              "parentMultiSelect": "N",
              "definitions": "UPC: GTIN-12, the 12-digit number including check-digit. If less than 12-digits, such as UPC-E which is 8-digits, add leading zeros up to 12-digits.; GTIN: GTIN-14, the 14-digit number including check-digit. If less than 14-digits add leading zeros up to 14-digits. ISBN: International Standard Book Number, the 10 or 13-digit number including check-digit.; EAN: GTIN-13, the 13-digit number including check-digit. If less than 13-digits add leading zeros up to 13-digits.",
              "examples": "UPC; GTIN; ISBN; EAN",
              "dataDefinitions": "Closed List - UPC: GTIN-12, the 12-digit number including check-digit. If less than 12-digits, such as UPC-E which is 8-digits, add leading zeros up to 12-digits.; GTIN: GTIN-14, the 14-digit number including check-digit. If less than 14-digits add leading zeros up to 14-digits. ISBN: International Standard Book Number, the 10 or 13-digit number including check-digit.; EAN: GTIN-13, the 13-digit number including check-digit. If less than 13-digits add leading zeros up to 13-digits.",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Product Identifiers",
              "uiHeader": "Item Content",
              "values": [
                "GTIN",
                "UPC"
              ],
              "owner": true
            },
            "productId": {
              "key": "product_id",
              "name": "Product ID",
              "xmlName": "productId",
              "requirementLevel": "Required",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 14,
              "isComplex": false,
              "isChild": true,
              "rank": 2000,
              "dataType": "String",
              "parentKey": "productIdentifiers",
              "parentMultiSelect": "N",
              "definitions": "Provide the GTIN that identifies the product's consumable (selling) unit. Expand the GTIN to 14 digits by adding preceding zeroes and check digit. A GTIN (Global Trade Item Number) is used to identify an item at any point in the Supply Chain. A GTIN refers to the data structure (not symbology) used to identify the scannable item, case, inner pack (i.e., break pack) or pallet that make up the hierarchy.",
              "examples": "00123456781011",
              "dataDefinitions": "Alphanumeric, 14 characters - Provide the GTIN that identifies the product's consumable (selling) unit. Expand the GTIN to 14 digits by adding preceding zeroes and check digit. A GTIN (Global Trade Item Number) is used to identify an item at any point in the Supply Chain. A GTIN refers to the data structure (not symbology) used to identify the scannable item, case, inner pack (i.e., break pack) or pallet that make up the hierarchy. Example: 00123456781011",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Product Identifiers",
              "uiHeader": "Item Content",
              "values": [
                "00697662129288",
                "697662129288"
              ],
              "owner": true
            }
          }
        },
        "externalProductIdentifier": {
          "key": "externalproductidentifier_60b7b5aa1ee2d2494a6b3fec_c16ccf52-5a97-4d67-b5ec-868ba67378ea",
          "name": "External Product Identifier",
          "xmlName": "externalProductIdentifier",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "Y",
          "isComplex": true,
          "isChild": false,
          "children": [
            [
              "External Product ID Type",
              "externalProductIdType"
            ],
            [
              "External Product ID",
              "externalProductId"
            ]
          ],
          "rank": 2500,
          "dataType": "Object",
          "definitions": "Specify External Product Identifier and its ID type if available. External Product Identifier should be in an alphanumeric, 10 characters format",
          "dataDefinitions": "Specify External Product Identifier and its ID type if available. External Product Identifier should be in an alphanumeric, 10 characters format",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Basic Item Info",
          "uiHeader": "Item Content",
          "uiSubHeader": "Optional",
          "owner": true,
          "childAttributes": {
            "externalProductIdType": {
              "key": "externalproductidtype_60b7b69390c7c975cfd521e0_1416af6c-1eab-4fb1-ad49-7110d97f2111",
              "name": "External Product ID Type",
              "xmlName": "externalProductIdType",
              "requirementLevel": "Required",
              "validValues": [
                "ASIN"
              ],
              "closedList": "Y",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 100,
              "isComplex": false,
              "isChild": true,
              "rank": 1000,
              "dataType": "String",
              "parentKey": "externalProductIdentifier",
              "parentMultiSelect": "Y",
              "definitions": "ASIN is the Amazon Standard Identification Number. It is the unique 10-digit sequence of letters and/or numbers",
              "examples": "ASIN",
              "dataDefinitions": "Closed List - ASIN is the Amazon Standard Identification Number. It is the unique 10-digit sequence of letters and/or numbers",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Basic Item Info",
              "uiHeader": "Item Content",
              "uiSubHeader": "Optional",
              "values": [],
              "owner": true
            },
            "externalProductId": {
              "key": "externalproductid_60b7b76883800c2ebb49c04a_c39faf8b-9182-4310-acfd-bc51180b988d",
              "name": "External Product ID",
              "xmlName": "externalProductId",
              "requirementLevel": "Required",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 10,
              "isComplex": false,
              "isChild": true,
              "rank": 2000,
              "dataType": "String",
              "parentKey": "externalProductIdentifier",
              "parentMultiSelect": "Y",
              "definitions": "Provide the ID for your “External Product ID Type”.",
              "examples": "B002Z36VJE",
              "dataDefinitions": "Alphanumeric, 10 characters - Provide the ID for your “External Product ID Type”. Example: B002Z36VJE",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Basic Item Info",
              "uiHeader": "Item Content",
              "uiSubHeader": "Optional",
              "values": [],
              "owner": true
            }
          }
        },
        "productName": {
          "key": "product_name",
          "name": "Product Name",
          "xmlName": "productName",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 200,
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Product Name",
              "productName"
            ]
          ],
          "rank": 3000,
          "dataType": "String",
          "definitions": "Title of the product to be displayed on the Item Page. The standard form is: Brand + Defining Qualities + Item Name + Pack Count, if applicable.",
          "examples": "George Girls' Short-Sleeve Polo",
          "dataDefinitions": "Alphanumeric, 200 characters - Title of the product to be displayed on the Item Page. The standard form is: Brand + Defining Qualities + Item Name + Pack Count, if applicable. Example: George Girls' Short-Sleeve Polo",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Basic Item Info",
          "uiHeader": "Item Content",
          "values": [
            "Goodyear eagle f1 asymmetric 3 P245/35R18 92Y bsw summer tire-JAN"
          ],
          "owner": true
        },
        "brand": {
          "key": "brand",
          "name": "Brand",
          "xmlName": "brand",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 60,
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Brand",
              "brand"
            ]
          ],
          "rank": 4000,
          "dataType": "String",
          "definitions": "Name, term, design or other feature that distinguishes one seller's product from those of others. This can be the name of the company associated with the product, but not always. If item does not have a brand, use\"Unbranded\".",
          "examples": "M&Ms",
          "dataDefinitions": "Alphanumeric, 60 characters - Name, term, design or other feature that distinguishes one seller's product from those of others. This can be the name of the company associated with the product, but not always. If item does not have a brand, use\"Unbranded\". Example: M&Ms",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Basic Item Info",
          "uiHeader": "Item Content",
          "values": [
            "Goodyear Tires"
          ],
          "owner": false,
          "message": "A higher-ranking seller has supplied the content for this attribute. Changes submitted will require an appeal. Approval is not guaranteed."
        },
        "pricePerUnit": {
          "key": "price_per_unit",
          "name": "Price Per Unit",
          "xmlName": "pricePerUnit",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "isComplex": true,
          "isChild": false,
          "children": [
            [
              "PPU Quantity of Units",
              "pricePerUnitQuantity"
            ],
            [
              "PPU Unit of Measure",
              "pricePerUnitUom"
            ]
          ],
          "rank": 5000,
          "dataType": "Object",
          "dataDefinitions": "",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Basic Item Info",
          "uiHeader": "Item Content",
          "owner": true,
          "childAttributes": {
            "pricePerUnitQuantity": {
              "key": "price_per_unit_quantity",
              "name": "PPU Quantity of Units",
              "xmlName": "pricePerUnitQuantity",
              "requirementLevel": "Recommended",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 9,
              "precision": "3",
              "isComplex": false,
              "isChild": true,
              "rank": 1000,
              "dataType": "Decimal",
              "parentKey": "pricePerUnit",
              "parentMultiSelect": "N",
              "definitions": "Enter the quantity of units for the item, based on the \"PPU Unit of Measure\" you selected. For example, a gallon of milk should be 128.  NOTE: Do not enter the price.",
              "examples": "12",
              "dataDefinitions": "Decimal, 9 characters - Enter the quantity of units for the item, based on the \"PPU Unit of Measure\" you selected. For example, a gallon of milk should be 128.  NOTE: Do not enter the price. Example: 12",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Basic Item Info",
              "uiHeader": "Item Content",
              "owner": true
            },
            "pricePerUnitUom": {
              "key": "price_per_unit_uom",
              "name": "PPU Unit of Measure",
              "xmlName": "pricePerUnitUom",
              "requirementLevel": "Recommended",
              "validValues": [
                "Cubic Foot",
                "Each",
                "Fluid Ounce",
                "Foot",
                "Inch",
                "Ounce",
                "Pound",
                "Square Foot",
                "Yard"
              ],
              "closedList": "Y",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 4000,
              "isComplex": false,
              "isChild": true,
              "rank": 2000,
              "dataType": "String",
              "parentKey": "pricePerUnit",
              "parentMultiSelect": "N",
              "definitions": "The units that will be used to calculate the \"Price Per Unit\" for your product. For example, a gallon of milk has a \"PPU Unit of Measure\" of Fluid Ounces. NOTE: This may not be the Unit of Measure on the label.",
              "examples": "Ounce; Fluid Ounce; Yard; Square Foot; Cubic Foot; Foot; Inch; Pound; Each",
              "dataDefinitions": "Closed List - The units that will be used to calculate the \"Price Per Unit\" for your product. For example, a gallon of milk has a \"PPU Unit of Measure\" of Fluid Ounces. NOTE: This may not be the Unit of Measure on the label.",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Basic Item Info",
              "uiHeader": "Item Content",
              "owner": true
            }
          }
        },
        "multipackQuantity": {
          "key": "multipack_quantity",
          "name": "Multipack Quantity",
          "xmlName": "multipackQuantity",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 4,
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Multipack Quantity",
              "multipackQuantity"
            ]
          ],
          "rank": 6000,
          "dataType": "Integer",
          "definitions": "The number of identical, individually packaged-for-sale items. If an item does not contain other items, does not contain identical items, or if the items contained within cannot be sold individually, the value for this attribute should be \"1.\" Examples: (1) A single bottle of 50 pills has a \"Multipack Quantity\" of \"1.\" (2) A package containing two identical bottles of 50 pills has a \"Multipack Quantity\" of 2. (3) A 6-pack of soda labelled for individual sale connected by plastic rings has a \"Multipack Quantity\" of \"6.\" (4) A 6-pack of soda in a box whose cans are not marked for individual sale has a \"Multipack Quantity\" of \"1.\" (5) A gift basket of 5 different items has a \"Multipack Quantity\" of \"1.\"",
          "examples": "1; 5",
          "dataDefinitions": "Number, 4 characters - The number of identical, individually packaged-for-sale items. If an item does not contain other items, does not contain identical items, or if the items contained within cannot be sold individually, the value for this attribute should be \"1.\" Examples: (1) A single bottle of 50 pills has a \"Multipack Quantity\" of \"1.\" (2) A package containing two identical bottles of 50 pills has a \"Multipack Quantity\" of 2. (3) A 6-pack of soda labelled for individual sale connected by plastic rings has a \"Multipack Quantity\" of \"6.\" (4) A 6-pack of soda in a box whose cans are not marked for individual sale has a \"Multipack Quantity\" of \"1.\" (5) A gift basket of 5 different items has a \"Multipack Quantity\" of \"1.\" Example: 1; 5",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Basic Item Info",
          "uiHeader": "Item Content",
          "owner": true
        },
        "electronicsIndicator": {
          "key": "electronic_ewaste_indicator",
          "name": "Contains Electronic Component?",
          "xmlName": "electronicsIndicator",
          "requirementLevel": "Recommended",
          "validValues": [
            "No",
            "Yes"
          ],
          "closedList": "Y",
          "multiSelect": "N",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Contains Electronic Component?",
              "electronicsIndicator"
            ]
          ],
          "rank": 9000,
          "dataType": "Boolean",
          "definitions": "Electronic is defined as item of merchandise containing a circuit board and/or electrical wiring, including but not limited to any item of merchandise with a screen.",
          "examples": "No",
          "dataDefinitions": "Closed List - Electronic is defined as item of merchandise containing a circuit board and/or electrical wiring, including but not limited to any item of merchandise with a screen.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Compliance & Regulatory",
          "uiHeader": "Item Content",
          "values": [
            "No"
          ],
          "owner": true
        },
        "batteryTechnologyType": {
          "key": "battery_type",
          "name": "Contained Battery Type",
          "xmlName": "batteryTechnologyType",
          "requirementLevel": "Recommended",
          "validValues": [
            "Alkaline",
            "Carbon Zinc",
            "Does Not Contain a Battery",
            "Lead Acid",
            "Lead Acid (Non-Spillable)",
            "Lithium Ion",
            "Lithium Primary (Lithium Metal)",
            "Magnesium",
            "Mercury",
            "Multiple Types",
            "Nickel Cadmium",
            "Nickel Metal Hydride",
            "Other",
            "Silver",
            "Thermal"
          ],
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 4000,
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Contained Battery Type",
              "batteryTechnologyType"
            ]
          ],
          "rank": 10000,
          "dataType": "String",
          "definitions": "Please select the Battery Technology Type from the list provided. NOTE: If battery type is lead acid, lead acid (nonspillable), lithium ion, or lithium metal, please ensure that you have obtained a hazardous materials risk assessment through WERCS before setting up your item.",
          "examples": "Does Not Contain a Battery",
          "dataDefinitions": "Closed List - Please select the Battery Technology Type from the list provided. NOTE: If battery type is lead acid, lead acid (nonspillable), lithium ion, or lithium metal, please ensure that you have obtained a hazardous materials risk assessment through WERCS before setting up your item.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Compliance & Regulatory",
          "uiHeader": "Item Content",
          "conditionalConfig": {
            "Lithium Ion": [
              "lithiumIonBatteries",
              "safetyDataSheet",
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize",
              "batteryModel",
              "batteryFormFactor",
              "numberOfBatteries",
              "numberOfBatteryCells",
              "includedBatteryPackaging",
              "batteryWeight",
              "batteryWattHour"
            ],
            "Lithium Primary (Lithium Metal)": [
              "lithiumMetalBatteries",
              "safetyDataSheet",
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize",
              "batteryModel",
              "batteryFormFactor",
              "numberOfBatteries",
              "numberOfBatteryCells",
              "includedBatteryPackaging",
              "batteryWeight",
              "lithiumMetalContentWeight"
            ],
            "Lead Acid": [
              "safetyDataSheet",
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Lead Acid (Non-Spillable)": [
              "safetyDataSheet",
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Alkaline": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Carbon Zinc": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Magnesium": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Mercury": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Multiple Types": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Nickel Cadmium": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Nickel Metal Hydride": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Other": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Silver": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ],
            "Thermal": [
              "numberOfHazardousComponents",
              "hasBatteries",
              "batterySize"
            ]
          },
          "values": [
            "Does Not Contain a Battery"
          ],
          "owner": true
        },
        "chemicalAerosolPesticide": {
          "key": "chemical_aerosol_pesticide",
          "name": "Contains Chemical, Aerosol or Pesticide?",
          "xmlName": "chemicalAerosolPesticide",
          "requirementLevel": "Recommended",
          "validValues": [
            "No",
            "Yes"
          ],
          "closedList": "Y",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 10,
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Contains Chemical, Aerosol or Pesticide?",
              "chemicalAerosolPesticide"
            ]
          ],
          "rank": 11000,
          "dataType": "String",
          "definitions": "Indicates whether the item contains a chemical, pesticide, or aerosol. Definitions and examples can be found at: https://supplierhelp.walmart.com/s/guide?article=000007868. If Yes, the item requires a hazardous materials risk assessment through WERCS.",
          "examples": "Yes",
          "dataDefinitions": "Closed List - Indicates whether the item contains a chemical, pesticide, or aerosol. Definitions and examples can be found at: https://supplierhelp.walmart.com/s/guide?article=000007868. If Yes, the item requires a hazardous materials risk assessment through WERCS.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Compliance & Regulatory",
          "uiHeader": "Item Content",
          "conditionalConfig": {
            "Yes": [
              "safetyDataSheet",
              "numberOfHazardousComponents"
            ]
          },
          "values": [
            "No"
          ],
          "owner": true
        },
        "price": {
          "key": "marketplace_price",
          "name": "Selling Price",
          "xmlName": "price",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "2",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Selling Price",
              "price"
            ]
          ],
          "rank": 12500,
          "dataType": "Decimal",
          "definitions": "The price the customer pays for the product. Please do not use commas or currency symbols. Only 2 digits allowed after decimal point.",
          "examples": "100.33",
          "dataDefinitions": "Decimal, 9 characters - The price the customer pays for the product. Please do not use commas or currency symbols. Only 2 digits allowed after decimal point. Example: 100.33",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Offer",
          "stripExtra": "#$%&",
          "uiHeader": "Offer",
          "uiSubHeader": "Offer Details",
          "values": [
            1
          ],
          "owner": true
        },
        "startDate": {
          "key": "product_offering_site_start_date",
          "name": "Site Start Date",
          "xmlName": "startDate",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Site Start Date",
              "startDate"
            ]
          ],
          "rank": 13000,
          "dataType": "Date",
          "definitions": "Indicates the date when the item is available to be published on the site.",
          "examples": "yyyy-mm-dd",
          "dataDefinitions": "Date, Indicates the date when the item is available to be published on the site. Example: yyyy-mm-dd",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Offer",
          "uiHeader": "Offer",
          "values": [
            1600153200000
          ],
          "owner": true
        },
        "endDate": {
          "key": "product_offering_site_end_date",
          "name": "Site End Date",
          "xmlName": "endDate",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Site End Date",
              "endDate"
            ]
          ],
          "rank": 14000,
          "dataType": "Date",
          "definitions": "Indicates the date when the partner's item should be removed from the site.",
          "examples": "yyyy-mm-dd",
          "dataDefinitions": "Date, Indicates the date when the partner's item should be removed from the site. Example: yyyy-mm-dd",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Offer",
          "uiHeader": "Offer",
          "values": [
            2524550400000
          ],
          "owner": true
        },
        "shipsInOriginalPackaging": {
          "key": "ships_in_original_packaging",
          "name": "Ships in Original Packaging",
          "xmlName": "shipsInOriginalPackaging",
          "requirementLevel": "Recommended",
          "validValues": [
            "No",
            "Yes"
          ],
          "closedList": "Y",
          "multiSelect": "N",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Ships in Original Packaging",
              "shipsInOriginalPackaging"
            ]
          ],
          "rank": 16000,
          "dataType": "Boolean",
          "definitions": "Can this product be shipped in the original packaging without being put in an outer box? Notes: 1) This is to indicate whether it's *possible* for the item to be shipped in original box, not whether it is required. 2) This was previously known as\"Ships As-Is.\"",
          "examples": "Yes; No",
          "dataDefinitions": "Closed List - Can this product be shipped in the original packaging without being put in an outer box? Notes: 1) This is to indicate whether it's *possible* for the item to be shipped in original box, not whether it is required. 2) This was previously known as\"Ships As-Is.\"",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Shipping Details",
          "uiHeader": "Item Content",
          "values": [
            "Yes"
          ],
          "owner": true
        },
        "MustShipAlone": {
          "key": "must_ship_alone",
          "name": "Must ship alone?",
          "xmlName": "MustShipAlone",
          "requirementLevel": "Recommended",
          "validValues": [
            "No",
            "Yes"
          ],
          "closedList": "Y",
          "multiSelect": "N",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Must ship alone?",
              "MustShipAlone"
            ]
          ],
          "rank": 17000,
          "dataType": "Boolean",
          "definitions": "Select \"Y\" if your item cannot ship with another item in the same box. If marked \"Y,\" the ship alone item will not be grouped for ship price calculation.",
          "examples": "Yes; No",
          "dataDefinitions": "Closed List - Select \"Y\" if your item cannot ship with another item in the same box. If marked \"Y,\" the ship alone item will not be grouped for ship price calculation.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Shipping Details",
          "uiHeader": "Item Content",
          "values": [
            "Yes"
          ],
          "owner": true
        },
        "additionalOfferAttributes": {
          "key": "additional_offer_attributes_5e28835388063c043434d92c",
          "name": "Additional Offer Attributes",
          "xmlName": "additionalOfferAttributes",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "Y",
          "isComplex": true,
          "isChild": false,
          "children": [
            [
              "Additional Offer Attribute Name",
              "additionalOfferAttributeName"
            ],
            [
              "Additional Offer Attribute Value",
              "additionalOfferAttributeValue"
            ]
          ],
          "rank": 17500,
          "dataType": "Object",
          "definitions": "If there is other information that is not in the Spec, you can create one using a name-value pair.",
          "dataDefinitions": "If there is other information that is not in the Spec, you can create one using a name-value pair.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Offer",
          "uiHeader": "Offer",
          "owner": true,
          "childAttributes": {
            "additionalOfferAttributeName": {
              "key": "additional_offer_attribute_name_5e28835388063c043434d92c",
              "name": "Additional Offer Attribute Name",
              "xmlName": "additionalOfferAttributeName",
              "requirementLevel": "Required",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 100,
              "isComplex": false,
              "isChild": true,
              "rank": 1000,
              "dataType": "String",
              "parentKey": "additionalOfferAttributes",
              "parentMultiSelect": "Y",
              "definitions": "Add an additional offer attribute not present in this template. Use camelCase for the name.",
              "examples": "planetNames",
              "dataDefinitions": "Alphanumeric, 100 characters - Add an additional offer attribute not present in this template. Use camelCase for the name. Example: planetNames",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Offer",
              "uiHeader": "Offer",
              "owner": true
            },
            "additionalOfferAttributeValue": {
              "key": "additional_offer_attribute_value_5e28835388063c043434d92c",
              "name": "Additional Offer Attribute Value",
              "xmlName": "additionalOfferAttributeValue",
              "requirementLevel": "Required",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 100,
              "isComplex": false,
              "isChild": true,
              "rank": 2000,
              "dataType": "String",
              "parentKey": "additionalOfferAttributes",
              "parentMultiSelect": "Y",
              "definitions": "Write your \"Additional Offer Attribute Value\" to give a description or answer for your \"Additional Offer Attribute Name.\" Together, these allow you to create your own descriptor that is not already in the taxonomy.",
              "examples": "36418238480545",
              "dataDefinitions": "Alphanumeric, 100 characters - Write your \"Additional Offer Attribute Value\" to give a description or answer for your \"Additional Offer Attribute Name.\" Together, these allow you to create your own descriptor that is not already in the taxonomy. Example: 36418238480545",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "excelHeader": "Offer",
              "uiHeader": "Offer",
              "owner": true
            }
          }
        },
        "ShippingWeight": {
          "key": "shipping_weight",
          "name": "Shipping Weight (lbs)",
          "xmlName": "ShippingWeight",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "N",
          "minDataLength": 1,
          "maxDataLength": 9,
          "precision": "3",
          "isComplex": false,
          "isChild": false,
          "children": [
            [
              "Shipping Weight (lbs)",
              "ShippingWeight"
            ]
          ],
          "rank": 18000,
          "dataType": "Decimal",
          "definitions": "The weight (in pounds) including all of its packaging materials. Only 3 digits maximum allowed after decimal point.",
          "examples": "5.288",
          "dataDefinitions": "Decimal, 9 characters - The weight (in pounds) including all of its packaging materials. Only 3 digits maximum allowed after decimal point. Example: 5.288",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Shipping Details",
          "uiHeader": "Offer",
          "uiSubHeader": "Offer Details",
          "values": [
            5
          ],
          "owner": true
        },
        "stateRestrictions": {
          "key": "state_restrictions_spec",
          "name": "Sale Restrictions",
          "xmlName": "stateRestrictions",
          "requirementLevel": "Recommended",
          "closedList": "N",
          "multiSelect": "Y",
          "isComplex": true,
          "isChild": false,
          "children": [
            [
              "Restriction Type",
              "stateRestrictionsText"
            ],
            [
              "State Codes",
              "states"
            ],
            [
              "ZIP Codes",
              "zipCodes"
            ]
          ],
          "rank": 19000,
          "dataType": "Object",
          "definitions": "Group of attributes to capture information when there are restrictions (legal or supplier discretion) prohibiting an item's sale.",
          "dataDefinitions": "Group of attributes to capture information when there are restrictions (legal or supplier discretion) prohibiting an item's sale.",
          "schemaGroup": "Orderable",
          "jsonPath": "Orderable/",
          "excelHeader": "Shipping Details",
          "uiHeader": "Offer",
          "uiSubHeader": "Sales restrictions",
          "owner": true,
          "childAttributes": {
            "stateRestrictionsText": {
              "key": "state_restrictions_text_spec",
              "name": "Restriction Type",
              "xmlName": "stateRestrictionsText",
              "requirementLevel": "Recommended",
              "validValues": [
                "Commercial",
                "Illegal for Sale",
                "None"
              ],
              "closedList": "Y",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 4000,
              "isComplex": false,
              "isChild": true,
              "rank": 1000,
              "dataType": "String",
              "parentKey": "stateRestrictions",
              "parentMultiSelect": "Y",
              "definitions": "Please select the level of restriction you are applying to your item, Illegal for Sale or Commercial. Illegal for Sale restrictions apply to items for sale in the United States of America which have a federal, state, and or local law/regulation. Commercial Restrictions apply to items for any reason out side of local or state laws. If your item does not have any Restriction please select None. If your item has a Commercial or Illegal for Sale Restrictions you must provide the States or Zip Codes which the item is Restricted in.",
              "examples": "Illegal for Sale, Commercial, None",
              "dataDefinitions": "Closed List - Please select the level of restriction you are applying to your item, Illegal for Sale or Commercial. Illegal for Sale restrictions apply to items for sale in the United States of America which have a federal, state, and or local law/regulation. Commercial Restrictions apply to items for any reason out side of local or state laws. If your item does not have any Restriction please select None. If your item has a Commercial or Illegal for Sale Restrictions you must provide the States or Zip Codes which the item is Restricted in.",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "editable": true,
              "visible": true,
              "editableBy": "core_user, online_user, partner",
              "excelHeader": "Shipping Details",
              "requiresApproval": "No",
              "uiHeader": "Offer",
              "uiSubHeader": "Sales restrictions",
              "visibleBy": "store_user, core_user, online_user, partner",
              "values": [
                "Illegal for Sale",
                "Commercial"
              ],
              "owner": true
            },
            "states": {
              "key": "us_state_5e28835388063c043434d92c",
              "name": "State Codes",
              "xmlName": "states",
              "requirementLevel": "Recommended",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 4000,
              "isComplex": false,
              "isChild": true,
              "rank": 2000,
              "dataType": "String",
              "parentKey": "stateRestrictions",
              "parentMultiSelect": "Y",
              "definitions": "Please list all States in which your product must and/or should be prohibited from being sold. You MUST provide us a list of all States and Zip Codes where your product is prohibited or restricted from being sold due to a law, regulation, ordinance, etc. You MAY, at your discretion, provide Walmart a list of all States and Zip Codes where you prefer to prohibit your product from being sold. Please remember that it is your obligation to understand and inform Walmart of any laws, regulations, ordinances etc. that would prohibit or restrict your product from being sold in a specific State or Zip Code.Please list all States where your product should not be sold for legal or commercial reasons.  You have an obligation to notify Walmart of any States where laws, regulations, ordinances etc. prohibit or restrict your product from being sold.  At your discretion, you may also specify any States where you prefer not to have your product sold for commercial reasons.  Please be aware that placing a State restriction on a product will restrict that product from being sold anywhere within the specified State, while placing a Zip Code restriction will only restrict that product from that Zip Code within a particular State. While Maintaining a State Restriction please be aware that you are required to re-submit all restrictions which apply to your item. Adding a Single Value will remove any previous restriction which was originally placed on the item and only restrict the single value which was added.  For a reference of State Codes please find the list here. Please remember to only include the State Codes and not the entire State Name. State Codes:  AL - Alabama, AK - Alaska, AZ - Arizona, AR - Arkansas, CA - California, CO - Colorado, CT - Connecticut , DE - Delaware, FL - Florida, GA - Georgia, HI - Hawaii, ID - Idaho, IL - Illinois , IN - Indiana, IA - Iowa, KS - Kansas, KY - Kentucky, LA - Louisiana, ME - Maine, MD - Maryland, MA - Massachusetts , MI - Michigan , MN - Minnesota, MS - Mississippi , MO - Missouri, MT - Montana , NE - Nebraska , NV - Nevada , NH - New Hampshire, NJ - New Jersey, NM - New Mexico, NY - New York, NC - North Carolina, ND - North Dakota, OH - Ohio, OK - Oklahoma, OR - Oregon, PA - Pennsylvania, RI - Rhode Island, SC - South Carolina, SD - South Dakota, TN - Tennessee , TX - Texas, UT - Utah, VT - Vermont, VA - Virginia, WA - Washington, WV - West Virginia, WI - Wisconsin, WY - Wyoming, District of Columbia, US Territories (APO/FPO, AS - American Somoa, FM - Federated States of Micronesia, GU - Guam, MI - Marshall Islands, MP - Northern Mariana Islands, PW - Palau, PR - Puerto Rico, VI - Virgin Islands)",
              "examples": "California",
              "dataDefinitions": "Alphanumeric, 4000 characters - Please list all States in which your product must and/or should be prohibited from being sold. You MUST provide us a list of all States and Zip Codes where your product is prohibited or restricted from being sold due to a law, regulation, ordinance, etc. You MAY, at your discretion, provide Walmart a list of all States and Zip Codes where you prefer to prohibit your product from being sold. Please remember that it is your obligation to understand and inform Walmart of any laws, regulations, ordinances etc. that would prohibit or restrict your product from being sold in a specific State or Zip Code.Please list all States where your product should not be sold for legal or commercial reasons.  You have an obligation to notify Walmart of any States where laws, regulations, ordinances etc. prohibit or restrict your product from being sold.  At your discretion, you may also specify any States where you prefer not to have your product sold for commercial reasons.  Please be aware that placing a State restriction on a product will restrict that product from being sold anywhere within the specified State, while placing a Zip Code restriction will only restrict that product from that Zip Code within a particular State. While Maintaining a State Restriction please be aware that you are required to re-submit all restrictions which apply to your item. Adding a Single Value will remove any previous restriction which was originally placed on the item and only restrict the single value which was added.  For a reference of State Codes please find the list here. Please remember to only include the State Codes and not the entire State Name. State Codes:  AL - Alabama, AK - Alaska, AZ - Arizona, AR - Arkansas, CA - California, CO - Colorado, CT - Connecticut , DE - Delaware, FL - Florida, GA - Georgia, HI - Hawaii, ID - Idaho, IL - Illinois , IN - Indiana, IA - Iowa, KS - Kansas, KY - Kentucky, LA - Louisiana, ME - Maine, MD - Maryland, MA - Massachusetts , MI - Michigan , MN - Minnesota, MS - Mississippi , MO - Missouri, MT - Montana , NE - Nebraska , NV - Nevada , NH - New Hampshire, NJ - New Jersey, NM - New Mexico, NY - New York, NC - North Carolina, ND - North Dakota, OH - Ohio, OK - Oklahoma, OR - Oregon, PA - Pennsylvania, RI - Rhode Island, SC - South Carolina, SD - South Dakota, TN - Tennessee , TX - Texas, UT - Utah, VT - Vermont, VA - Virginia, WA - Washington, WV - West Virginia, WI - Wisconsin, WY - Wyoming, District of Columbia, US Territories (APO/FPO, AS - American Somoa, FM - Federated States of Micronesia, GU - Guam, MI - Marshall Islands, MP - Northern Mariana Islands, PW - Palau, PR - Puerto Rico, VI - Virgin Islands) Example: California",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "editable": true,
              "visible": true,
              "editableBy": "online_user,partner,core_user",
              "excelHeader": "Shipping Details",
              "uiHeader": "Offer",
              "uiSubHeader": "Sales restrictions",
              "visibleBy": "store_user,core_user,online_user,partner",
              "values": [
                [
                  "TX"
                ],
                [
                  "CA"
                ]
              ],
              "owner": true
            },
            "zipCodes": {
              "key": "zip_codes",
              "name": "ZIP Codes",
              "xmlName": "zipCodes",
              "requirementLevel": "Recommended",
              "closedList": "N",
              "multiSelect": "N",
              "minDataLength": 1,
              "maxDataLength": 4000,
              "isComplex": false,
              "isChild": true,
              "rank": 3000,
              "dataType": "String",
              "parentKey": "stateRestrictions",
              "parentMultiSelect": "Y",
              "definitions": "Please list all Zip Codes where your product should not be sold for legal or commercial reasons. You have an obligation to notify Walmart of any Zip Codes where laws, regulations, ordinances etc. prohibit or restrict your product from being sold.  At your discretion, you may also specify any Zip Codes where you prefer not to have your product sold for commercial reasons.  Please be aware that placing a Zip Code restriction on a product will only restrict that product from being sold within that Zip Code.  To restrict an entire State, please specify the State instead of using Zip Codes. While Maintaining a Zip Code Restriction please be aware that you are required to re-submit all restrictions which apply to your item. Adding a Single Value will remove any previous restriction which was originally placed on the item and only restrict the single value which was added.",
              "examples": "94085, 94086, 94087, 72712, 72716",
              "dataDefinitions": "Alphanumeric, 4000 characters - Please list all Zip Codes where your product should not be sold for legal or commercial reasons. You have an obligation to notify Walmart of any Zip Codes where laws, regulations, ordinances etc. prohibit or restrict your product from being sold.  At your discretion, you may also specify any Zip Codes where you prefer not to have your product sold for commercial reasons.  Please be aware that placing a Zip Code restriction on a product will only restrict that product from being sold within that Zip Code.  To restrict an entire State, please specify the State instead of using Zip Codes. While Maintaining a Zip Code Restriction please be aware that you are required to re-submit all restrictions which apply to your item. Adding a Single Value will remove any previous restriction which was originally placed on the item and only restrict the single value which was added. Example: 94085, 94086, 94087, 72712, 72716",
              "schemaGroup": "Orderable",
              "jsonPath": "Orderable/",
              "editable": true,
              "visible": true,
              "editableBy": "core_user, online_user, partner",
              "excelHeader": "Shipping Details",
              "requiresApproval": "No",
              "uiHeader": "Offer",
              "uiSubHeader": "Sales restrictions",
              "visibleBy": "store_user, core_user, online_user, partner",
              "values": [
                [
                  "76010"
                ],
                [
                  "94586"
                ]
              ],
              "owner": true
            }
          }
        }
      }
    }
  },
  "Headers": {
    "key": "headers",
    "name": "Headers",
    "attributes": {
      "requestId": {
        "key": "request_id",
        "name": "Request ID",
        "xmlName": "requestId",
        "requirementLevel": "Recommended",
        "closedList": "N",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 64,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Request ID",
            "requestId"
          ]
        ],
        "rank": 1000,
        "dataType": "String",
        "definitions": "Partner's ID of the feed, partner's ID to correlate feed and feed response.",
        "dataDefinitions": "Alphanumeric, 64 characters - Partner's ID of the feed, partner's ID to correlate feed and feed response."
      },
      "requestBatchId": {
        "key": "request_batch_id",
        "name": "Request Batch ID",
        "xmlName": "requestBatchId",
        "requirementLevel": "Recommended",
        "closedList": "N",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 64,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Request Batch ID",
            "requestBatchId"
          ]
        ],
        "rank": 2000,
        "dataType": "String",
        "definitions": "Represents external generated batchId",
        "dataDefinitions": "Alphanumeric, 64 characters - Represents external generated batchId"
      },
      "feedDate": {
        "key": "feed_date",
        "name": "Feed Date",
        "xmlName": "feedDate",
        "requirementLevel": "Recommended",
        "closedList": "N",
        "multiSelect": "N",
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Feed Date",
            "feedDate"
          ]
        ],
        "rank": 3000,
        "dataType": "DateTime",
        "definitions": "Date after which the offer is no longer valid. The dateTime is specified in the following form\"YYYY-MM-DDThh:mm:ss\" where: YYYY indicates the year, MM indicates the month, DD indicates the day. T indicates the start of the required time section; hh indicates the hour; mm indicates the minute; ss indicates the second. Note: All components are required!",
        "dataDefinitions": "Date after which the offer is no longer valid. The dateTime is specified in the following form\"YYYY-MM-DDThh:mm:ss\" where: YYYY indicates the year, MM indicates the month, DD indicates the day. T indicates the start of the required time section; hh indicates the hour; mm indicates the minute; ss indicates the second. Note: All components are required!"
      },
      "processMode": {
        "key": "process_mode",
        "name": "Process Mode",
        "xmlName": "processMode",
        "requirementLevel": "Required",
        "validValues": [
          "REPLACE"
        ],
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 400,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Process Mode",
            "processMode"
          ]
        ],
        "rank": 4000,
        "dataType": "String",
        "definitions": "Indicate if full or partial update request",
        "dataDefinitions": "Closed List - Indicate if full or partial update request"
      },
      "subset": {
        "key": "subset",
        "name": "Subset",
        "xmlName": "subset",
        "requirementLevel": "Required",
        "validValues": [
          "EXTERNAL"
        ],
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 400,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Subset",
            "subset"
          ]
        ],
        "rank": 5000,
        "dataType": "String",
        "dataDefinitions": ""
      },
      "mart": {
        "key": "mart",
        "name": "Mart",
        "xmlName": "mart",
        "requirementLevel": "Recommended",
        "validValues": [
          "ASDA_GM",
          "WALMART_CA",
          "WALMART_US"
        ],
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 20,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Mart",
            "mart"
          ]
        ],
        "rank": 6000,
        "dataType": "String",
        "definitions": "Where the item would be listed (Please select a value from the drop-down below)",
        "examples": "WALMART_US; ASDA_GM; WALMART_CA",
        "dataDefinitions": "Closed List - Where the item would be listed (Please select a value from the drop-down below)"
      },
      "sellingChannel": {
        "key": "selling_channel",
        "name": "Selling Channel",
        "xmlName": "sellingChannel",
        "requirementLevel": "Required",
        "validValues": [
          "mpmaintenance"
        ],
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 4000,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Selling Channel",
            "sellingChannel"
          ]
        ],
        "rank": 7000,
        "dataType": "String",
        "dataDefinitions": ""
      },
      "version": {
        "key": "spec_version",
        "name": "Spec Version",
        "xmlName": "version",
        "requirementLevel": "Required",
        "validValues": [
          "4.7"
        ],
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 400,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Spec Version",
            "version"
          ]
        ],
        "rank": 8000,
        "dataType": "String",
        "definitions": "This indicates schema version associated with the XML payload.",
        "dataDefinitions": "Closed List - This indicates schema version associated with the XML payload."
      },
      "subCategory": {
        "key": "product_sub_category",
        "name": "Sub Category",
        "xmlName": "subCategory",
        "requirementLevel": "Recommended",
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 400,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Sub Category",
            "subCategory"
          ]
        ],
        "rank": 9000,
        "dataType": "String",
        "definitions": "SubCategory",
        "dataDefinitions": "Alphanumeric, 400 characters - SubCategory",
        "validValues": [
          "animal_accessories",
          "animal_food",
          "animal_health_and_grooming",
          "animal_other",
          "art_and_craft_other",
          "baby_food",
          "baby_furniture",
          "baby_other",
          "baby_toys",
          "bedding",
          "books_and_magazines",
          "building_supply",
          "cameras_and_lenses",
          "carriers_and_accessories_other",
          "cases_and_bags",
          "cell_phones",
          "ceremonial_clothing_and_accessories",
          "child_car_seats",
          "cleaning_and_chemical",
          "clothing_other",
          "computer_components",
          "computers",
          "costumes",
          "cycling",
          "decorations_and_favors",
          "electrical",
          "electronics_accessories",
          "electronics_cables",
          "electronics_other",
          "food_and_beverage_other",
          "footwear_other",
          "fuels_and_lubricants",
          "funeral",
          "furniture_other",
          "garden_and_patio_other",
          "gift_supply_and_awards",
          "grills_and_outdoor_cooking",
          "hardware",
          "health_and_beauty_electronics",
          "home_other",
          "instrument_accessories",
          "jewelry_other",
          "land_vehicles",
          "large_appliances",
          "medical_aids",
          "medicine_and_supplements",
          "movies",
          "music",
          "music_cases_and_bags",
          "musical_instruments",
          "office_other",
          "optical",
          "optics",
          "other_other",
          "personal_care",
          "photo_accessories",
          "plumbing_and_hvac",
          "printers_scanners_and_imaging",
          "safety_and_emergency",
          "software",
          "sound_and_recording",
          "sport_and_recreation_other",
          "storage",
          "tires",
          "tools",
          "tools_and_hardware_other",
          "toys_other",
          "tv_shows",
          "tvs_and_video_displays",
          "vehicle_other",
          "vehicle_parts_and_accessories",
          "video_games",
          "video_projectors",
          "watches_other",
          "watercraft",
          "wheels_and_wheel_components"
        ]
      },
      "locale": {
        "key": "locale",
        "name": "Locale",
        "xmlName": "locale",
        "requirementLevel": "Required",
        "validValues": [
          "en"
        ],
        "closedList": "Y",
        "multiSelect": "N",
        "minDataLength": 1,
        "maxDataLength": 400,
        "isComplex": false,
        "isChild": false,
        "children": [
          [
            "Locale",
            "locale"
          ]
        ],
        "rank": 10000,
        "dataType": "String",
        "examples": "EN",
        "dataDefinitions": ""
      }
    }
  },
  "lqIssuesHavingCount": 0,
  "offerId": "4D9613C7997E4F6E9343155B2B113255",
  "fulfilmentType": "seller",
  "itemId": "760121100",
  "statusCode": 200
}
