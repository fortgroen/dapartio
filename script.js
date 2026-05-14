 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..46dc4849a4b8537915038deb2e5ea9b46a1be359
--- /dev/null
+++ b/script.js
@@ -0,0 +1 @@
+document.getElementById('year').textContent = new Date().getFullYear();
 
EOF
)
