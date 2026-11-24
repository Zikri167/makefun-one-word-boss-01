[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Zikri167/makefun-one-word-boss-01/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/Zikri167/makefun-one-word-boss-01/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

# One Word for the Boss — Thermostat

Entry for [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735) on make.fun.

## The word

**Thermostat.**

The boss who sets the temperature of the whole room. Everyone checks the
thermostat before they speak: one degree of mood shift and the entire
office, kitchen, or warehouse adjusts. It is a word people actually use
about the person they report to, it lands on its own with no caption, it
catches a real habit every worker has met, and it travels — every workplace
has a thermostat.

## How it runs

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the
single word to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It guards
the gate itself: exactly one word, 1–30 characters, no whitespace, no
control characters, and it reads the file back to verify the write
round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt   # Thermostat
```

Verified: three runs produce byte-identical output
(sha256 `dd1eeb3ccf9f7bcb46b4060bf9e2b0afaaae254af38e6ca619044fd49ee75330`).

## License

MIT — see [LICENSE](LICENSE).
