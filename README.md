# Phlebotomy Order of Draw Guide

## The problem
Phlebotomists and lab techs need an easy way to reference the correct order of draw, tube additives, common tests and specimen handling requirements. My page will provide a quick reference guide to help users find this information in one place.

## The plan

### Data
Dataset: `phlebotomy-order-of-draw`

| Field | Example value |
|---|---|
| `id` | `blood-culture` |
| `order` | `1` |
| `container_name` | `Blood Culture Bottles` |
| `tube_name` | `Blood Culture` |
| `tube_color` | `Blood Culture Bottles` |
| `image_url` | `images/bloodCulture.png` |
| `additive` | `Blood culture media` |
| `specimen_type` | `Whole blood` |
| `common_tests` | `Blood culture` |
| `test_abbreviations` | `BC` |
| `test_names` | `Blood culture` |
| `collection_notes` | `Follow the laboratory collection procedure` |
| `mixing_instructions` | `Follow the collection procedure` |
| `clotting_requirements` | `Not applicable` |
| `centrifugation` | `Do not centrifuge` |

### Sections
- Page title and introduction.
- Search area for finding tubes or tests.
- Tube cards displayed in order of draw.
- Tube color, additive, specimen type, common tests, test abbreviations and test names.
- Collection notes, mixing instructions, clotting requirements and centrifugation information.

### User action
- A visitor searches by tube name, tube color or test and the page displays matching tube information.

## Team
Accountability partner: @edwardcoded77

## Links
- Live: https://phlebotomy-order-of-draw-guide.netlify.app/
- Repo: https://github.com/helloimshanae/hackathon