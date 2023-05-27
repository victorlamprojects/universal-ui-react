#! /usr/bin/bash

file=''
upgrade_type='minor'

while getopts "f:t:" OPT; do
	case $OPT in
		f)
			file="$OPTARG"
			;;
		t)
			upgrade_type="$OPTARG"
			;;
	esac
done

if [ -z $file ]; then
	echo "-f flag cannot be empyt. Please specify the correct package.json path"
	exit 1
fi

version_line=$(grep -n "\"version\": \"[0-9]*\.[0-9]*\.[0-9]*\"" "$file" | cut -d: -f1)
version=$(grep -Eo "\"version\": \"[0-9]*\.[0-9]*\.[0-9]*\"" $file | awk '{print $2}' | tr -d '"')

major_version=$(echo "$version" | cut -d. -f1)
minor_version=$(echo "$version" | cut -d. -f2)
patch_version=$(echo "$version" | cut -d. -f3)

if [ "$upgrade_type" = 'major' ]; then
	major_version=$((major_version+1))
	minor_version=0
	patch_version=0
elif [ "$upgrade_type" = 'minor' ]; then
	minor_version=$((minor_version+1))
	patch_version=0
else
	patch_version=$((patch_version+1))
fi

version="$major_version.$minor_version.$patch_version"
sed -i $version_line"s/[0-9]*\.[0-9]*\.[0-9]*/$version/" "$file"
