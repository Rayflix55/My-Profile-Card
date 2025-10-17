# Profile Card Project

A responsive, semantic HTML profile card component that displays user information including bio, social links, hobbies, and dislikes. Built with vanilla HTML, CSS, and JavaScript.

## 🎯 Features

- **Semantic HTML5** structure for better accessibility and SEO
- **Responsive design** that adapts to mobile, tablet, and desktop screens
- **Real-time clock** displaying current time in milliseconds
- **Social media integration** with GitHub, Twitter, Discord, LinkedIn, and Telegram
- **Test-ready** with proper `data-testid` attributes for automated testing
- **Keyboard accessible** with proper focus states and navigation

## 📋 Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for proper file loading)

## 🚀 Running Locally

### Method 1: Direct File Opening (Simple)

1. **Clone or download** the project:
   ```bash
   git clone <repository-url>
   cd profile-card-project
   ```

2. **Open the HTML file** directly in your browser:
   - Navigate to the project folder
   - Double-click `index.html`
   - Or right-click → "Open with" → Select your browser

### Method 2: Using a Local Server (Recommended)

#### Option A: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

#### Option B: Using Node.js (http-server)
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000
```
Then open: `http://localhost:8000`

#### Option C: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
profile-card-project/
│
├── index.html          # Main HTML file with semantic structure
├── style.css           # Stylesheet for responsive design
├── script.js           # JavaScript for real-time clock
├── web3rayflix.jpg     # Profile avatar image
└── README.md           # Project documentation
```

## 🧪 Testing

The project includes specific `data-testid` attributes for automated testing:

- `test-profile-card` - Profile card container
- `test-user-name` - User's name
- `test-user-bio` - User biography
- `test-user-time` - Current time in milliseconds
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social media links container
- `test-user-social-<network>` - Individual social links
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

## 🎨 Customization

### Updating Profile Information

Edit the `index.html` file to customize:

1. **Name**: Update the content in the `<h3>` tag with `data-testid="test-user-name"`
2. **Bio**: Modify the `<p>` tag with `data-testid="test-user-bio"`
3. **Avatar**: Replace `web3rayflix.jpg` with your image and update the `src` attribute
4. **Social Links**: Update the `href` attributes in the `<nav>` section
5. **Hobbies/Dislikes**: Edit the `<li>` items in their respective `<ul>` lists

### Styling

Modify `style.css` to customize:
- Colors and themes
- Font sizes and families
- Layout and spacing
- Responsive breakpoints

## 🔧 Technical Details

### Time Display
The current time is displayed in milliseconds using `Date.now()` and updates every second via JavaScript:

```javascript
function updateTime() {
  document.getElementById('time').textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime();
```

### Semantic HTML
The project uses proper semantic HTML5 elements:
- `<article>` for the card container
- `<figure>` for the avatar image
- `<nav>` for social links
- `<section>` for content areas
- `<time>` for temporal information

### Accessibility Features
- All images have `alt` attributes
- All links are keyboard-focusable
- Proper heading hierarchy
- ARIA-friendly structure

## 📱 Responsive Design

The card is designed to be responsive across different screen sizes:
- **Mobile** (< 768px): Vertical stack layout
- **Tablet** (768px - 1024px): Optimized spacing
- **Desktop** (> 1024px): Full layout with side-by-side elements

## 🔗 Dependencies

- **Font Awesome** (v6.x): Used for social media icons
  - Loaded via CDN: `https://kit.fontawesome.com/7401a24b2f.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**RAYFLIX**
- GitHub: [@Rayflix55](https://github.com/Rayflix55)
- Twitter: [@web3rayflix](https://twitter.com/web3rayflix)
- LinkedIn: [Akpe Samuel](https://linkedin.com/in/akpe-samuel-993971329)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note**: Make sure all file paths (CSS, JavaScript, images) are correct relative to your `index.html` file location.
