function drawtree(height) {
    for (let i = 0; i <height; i++){
        const spaces = ''.repeat(height - i - 1);
    const stars = '*'.repeat(2*i+1);
console.log(spaces + stars);
  }
}

const height = parseInt(prompt("Enter the height of the tree:"));

drawtree(height);
