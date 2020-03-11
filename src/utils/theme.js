const colors = {
  $primary: "#007bff",
  $secondary: "#6c757d",
  $warning: "#ffc107",
  $dark: "#343a40",
  $danger: "#dc3545",
  $info: "#17a2b8",
  $green: "#28a745",
  $light: "#f8f9fa",
  $white: "#fff",
  $gold: "#ffc587",

  $brand_purple: "#2205a8",
  $brand_orange: "#d96f04"
};

const styles = {
  $border_radius: "border-radius: 5px;",
  $btn_danger: `background-color: ${colors.$danger}; color: ${colors.$white}; box-shadow: 0 0 0px 3px rgba(255, 169, 163, 0.5);`,
  $box_shadow: `box-shadow: 0 0 2px #ccc;`
};

export default { ...colors, ...styles };
