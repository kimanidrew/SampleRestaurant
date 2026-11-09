#!/usr/bin/env python3
"""Extract five representative JIKO tour frames from the supplied ZIP archive.

Usage:
  python scripts/import-tour-assets.py "path/to/ffffff-ezgif-8c2bceebd46446f5-gif-jpg.zip"
"""
from pathlib import Path
from zipfile import ZipFile
import sys

if len(sys.argv) < 2:
    raise SystemExit("Pass the path to the supplied ZIP archive.")

archive = Path(sys.argv[1]).expanduser()
if not archive.is_file():
    raise SystemExit(f"ZIP archive not found: {archive}")

wanted = {
    "frame_000_delay-0.06s.jpg",
    "frame_040_delay-0.06s.jpg",
    "frame_080_delay-0.06s.jpg",
    "frame_120_delay-0.06s.jpg",
    "frame_159_delay-0.06s.jpg",
}
destination = Path("public/assets/tour")
destination.mkdir(parents=True, exist_ok=True)

with ZipFile(archive) as bundle:
    available = {Path(name).name: name for name in bundle.namelist()}
    missing = wanted - available.keys()
    if missing:
        raise SystemExit("Missing expected frames in ZIP: " + ", ".join(sorted(missing)))
    for filename in sorted(wanted):
        target = destination / filename
        target.write_bytes(bundle.read(available[filename]))
        print(f"Imported {target}")

print("Done. The 3D hero now has five restaurant-tour photo panels.")
